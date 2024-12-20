import { Contact } from 'planck'
import { Game } from './game'
import { Feature } from './features/feature'
import { Fighter } from './actors/fighter'
import { Star } from './actors/star'
import { Weapon } from './actors/weapon'
import { Counter } from './actors/counter'
import { Player } from './actors/player'
import { Halo } from './features/halo'
import { Blade } from './features/blade'
import { Torso } from './features/torso'

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
      }
      if (actorA instanceof Player && featureA instanceof Torso && actorB instanceof Counter) {
        actorB.playerCount += 1
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
      const actorB = featureB.actor
      if (actorA instanceof Player && actorB instanceof Counter) {
        actorB.playerCount -= 1
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
      if (featureA instanceof Halo) {
        featureA.onCollide(contact)
        contact.setEnabled(false)
        return
      }
      if (featureB instanceof Halo) {
        featureB.onCollide(contact)
        contact.setEnabled(false)
        return
      }
      if (actorA instanceof Fighter && actorA.dead) {
        contact.setEnabled(false)
        return
      }
      if (actorB instanceof Fighter && actorB.dead) {
        contact.setEnabled(false)
        return
      }
      if (actorA instanceof Weapon && actorA.fighter.dead) {
        contact.setEnabled(false)
        return
      }
      if (actorB instanceof Weapon && actorB.fighter.dead) {
        contact.setEnabled(false)
        return
      }
      if (featureA instanceof Blade && featureB instanceof Torso) {
        contact.setEnabled(false)
        const weapon = featureA.weapon
        const fighter = featureB.fighter
        if (fighter.team !== weapon.fighter.team) {
          fighter.die()
        }
      }
    })
  }
}
