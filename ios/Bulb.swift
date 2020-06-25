//
//  Bulb.swift
//  bridgetest
//
//  Created by Waler Shub on 6/25/20.
//

import Foundation

import Foundation

@objc(Bulb)
class Bulb: NSObject {

@objc
static var isOn = false

@objc
 func turnOn() {
  Bulb.isOn = true
  print("Bulb is now ON")
 }
}

@objc
static func requiresMainQueueSetup() -> Bool {
  return true
}
