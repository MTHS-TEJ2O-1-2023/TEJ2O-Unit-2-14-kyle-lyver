"""
Created by: Kyle Lyver
Created on: Nov 2023
This module is a Micro:bit MicroPython program that shows a led on a microbit
"""

from microbit import *

# variables
loop_counter = 0

# setup
display.clear()
display.show(Image.HAPPY)
sleep(000)

# loop
while True:
    if button_a.is_pressed():
        # setup
        display.clear()
        loop_counter = 0
        # loop
        while loop_counter < 5:
            sleep(500)
            # when button A is pressed, leds move downwards from top left corner to bottom right corner
            display.set_pixel(loop_counter, loop_counter, 9)
            sleep(500)
            display.clear()
            # loop_counter goes up by 1
            loop_counter += 1
        display.show(Image.HAPPY)

    if button_b.is_pressed():
        # setup
        display.clear()
        loop_counter = 4
        # loop
        while loop_counter > -1:
            sleep(500)
            # when button A is pressed, leds move downwards from bottom right corner to top left corner
            display.set_pixel(loop_counter, loop_counter, 9)
            sleep(500)
            display.clear()
            # loop_counter goes down by 1
            loop_counter -= 1
        display.show(Image.HAPPY)
