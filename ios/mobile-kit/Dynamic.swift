//
//  Dynamic.swift
//  mobile-kit
//
//  Created by bugra on 9.07.2022.
//

import UIKit
import Foundation
import Lottie

@objc class Dynamic: NSObject {
  
  @objc func createAnimationView(rootView: UIView, lottieName: String) -> AnimationView {
    let animationView = AnimationView(name: lottieName)
    animationView.frame = rootView.frame
    animationView.center = rootView.center
    animationView.backgroundColor = UIColor.white;
    return animationView;
  }
  
  @objc func play(animationView: AnimationView) {
    animationView.play(
      completion: { (success) in
        RNSplashScreen.setAnimationFinished(true)
      }
    );
  }
}
