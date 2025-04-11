import { Contact, Vec2 } from 'planck'
import { Feature } from './features/feature'
import { Star } from './actors/star'
import { Player } from './actors/player'
import { Torso } from './features/torso'
import { GuardArea } from './features/guardArea'
import { Halo } from './features/halo'
import { Boundary } from './features/boundary'
import { BladeCircle } from './features/bladeCircle'
import { Fighter } from './actors/fighter'
import { Guard } from './actors/guard'
import { Simulation } from './simulation'

export class Collider {
  simulation: Simulation

  constructor (game: Simulation) {
    this.simulation = game
    this.simulation.world.on('pre-solve', contact => this.preSolve(contact))
    this.simulation.world.on('begin-contact', contact => this.beginContact(contact))
    this.simulation.world.on('end-contact', contact => this.endContact(contact))
  }

  beginContact (contact: Contact): void {
    const a = contact.getFixtureA().getUserData() as Feature
    const b = contact.getFixtureB().getUserData() as Feature
    const pairs = [[a, b], [b, a]]
    pairs.forEach(pair => {
      const featureA = pair[0]
      const featureB = pair[1]
      const actorA = featureA.actor
      const actorB = featureB.actor
      if (actorA instanceof Player && featureA instanceof Torso && actorB instanceof Star) {
        actorA.spawnPoint = actorB.position
        if (actorA.stars.includes(actorB.index)) return
        actorA.stars.push(actorB.index)
      }
      if (actorA instanceof Fighter && featureA instanceof Torso && featureB instanceof GuardArea) {
        if (actorA instanceof Player) {
          featureB.players.set(actorA.id, actorA)
        }
        if (actorA instanceof Guard) {
          featureB.guards.set(actorA.id, actorA)
        }
      }
    })
  }

  endContact (contact: Contact): void {
    const a = contact.getFixtureA().getUserData() as Feature
    const b = contact.getFixtureB().getUserData() as Feature
    const pairs = [[a, b], [b, a]]
    pairs.forEach(pair => {
      const featureA = pair[0]
      const featureB = pair[1]
      const actorA = featureA.actor
      if (actorA instanceof Fighter && featureA instanceof Torso && featureB instanceof GuardArea) {
        if (actorA instanceof Player) {
          featureB.players.delete(actorA.id)
        }
        if (actorA instanceof Guard) {
          featureB.guards.delete(actorA.id)
        }
      }
    })
  }

  preSolve (contact: Contact): void {
    const a = contact.getFixtureA().getUserData() as Feature
    const b = contact.getFixtureB().getUserData() as Feature
    const pairs = [[a, b], [b, a]]
    pairs.forEach(pair => {
      const featureA = pair[0]
      const featureB = pair[1]
      const actorA = featureA.actor
      const actorB = featureB.actor
      if (actorA instanceof Star || actorB instanceof Star) {
        contact.setEnabled(false)
        return
      }
      if (featureA instanceof BladeCircle && featureB instanceof Boundary) {
        contact.setEnabled(false)
      }
      if (featureA instanceof Boundary && featureB instanceof BladeCircle) {
        contact.setEnabled(false)
      }
      if (featureA instanceof Halo || featureB instanceof Halo) {
        contact.setEnabled(false)
      }
      if (featureA instanceof Halo && featureB instanceof Boundary) {
        const worldManifold = contact.getWorldManifold(null)
        if (worldManifold == null) return
        const wallPoint = new Vec2(worldManifold.points[0])
        featureA.wallPoints.push(wallPoint)
      }
      if (featureA instanceof BladeCircle && featureB instanceof Torso && contact.isTouching()) {
        const fighterA = featureA.fighter
        const fighterB = featureB.fighter
        if (fighterA.id === fighterB.id) {
          contact.setEnabled(false)
        }
        // if (fighterA.team === fighterB.team) {
        //   return
        // }
        const manifold = contact.getWorldManifold(null)
        if (manifold == null) return
        if (manifold.pointCount === 0) return
        const overlap = -Math.min(...manifold.separations)
        const deathPoint = new Vec2(manifold.points[0])
        if (overlap > 0) fighterB.die(deathPoint)
      }
    })
  }
}
