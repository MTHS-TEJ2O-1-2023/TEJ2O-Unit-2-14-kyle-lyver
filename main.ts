/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: Nov 2023
 * This program moves an led on the screen
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// when button A is pressed, leds move downwards from top left corner to bottom right corner
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  loopCounter = 0
  sprite = game.createSprite(0, 0)

  while (loopCounter <= 5) {
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter = loopCounter + 1
    basic.pause(500)
  }

  sprite.delete()
  basic.showIcon(IconNames.Happy)
})

// when button A is pressed, leds move upwards from bottom right corner to top left corner
input.onButtonPressed(Button.B, function () {
  // setup
  basic.clearScreen()
  loopCounter = 5
  sprite = game.createSprite(5, 5)

  while (loopCounter >= 0) {
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter = loopCounter - 1
    basic.pause(500)
  }

  sprite.delete()
  basic.showIcon(IconNames.Happy)
})
