import { Contact, Vec2 } from 'planck'
import { Game } from './game'
import { Feature } from './features/feature'
import { Star } from './actors/star'
import { Player } from './actors/player'
import { Torso } from './features/torso'
import { GuardArea } from './features/guardArea'
import { Halo } from './features/halo'
import { Boundary } from './features/boundary'
import { Blade } from './features/blade'

export class Collider {
  game: Game

  constructor (game: Game) {
    this.game = game
    this.game.world.on('pre-solve', contact => this.preSolve(contact))
    this.game.world.on('begin-contact', contact => this.beginContact(contact))
    this.game.world.on('end-contact', contact => this.endContact(contact))
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
      if (actorA instanceof Player && featureA instanceof Torso && featureB instanceof GuardArea) {
        featureB.players.set(actorA.id, actorA)
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
      if (actorA instanceof Player && featureA instanceof Torso && featureB instanceof GuardArea) {
        featureB.players.delete(actorA.id)
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
      // if (featureA instanceof Blade && !(featureB instanceof Blade)) {
      //   contact.setEnabled(false)
      // }
      // if (featureB instanceof Blade && !(featureA instanceof Blade)) {
      //   contact.setEnabled(false)
      // }
      if (featureA instanceof Halo || featureB instanceof Halo) {
        contact.setEnabled(false)
      }
      if (featureA instanceof Halo && featureB instanceof Boundary) {
        const worldManifold = contact.getWorldManifold(null)
        if (worldManifold == null) return
        const wallPoint = new Vec2(worldManifold.points[0])
        featureA.wallPoints.push(wallPoint)
      }
      if (featureA instanceof Blade && featureB instanceof Torso && contact.isTouching()) {
        const fighterA = featureA.fighter
        const fighterB = featureB.fighter
        if (fighterA.id === fighterB.id) {
          contact.setEnabled(false)
        }
        if (fighterA.team === fighterB.team) {
          return
        }
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
