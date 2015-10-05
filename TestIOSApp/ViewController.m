//
//  ViewController.m
//  TestIOSApp
//
//  Created by Nitin Alabur on 9/17/15.
//  Copyright © 2015 Nitin Alabur. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
@property (weak, nonatomic) IBOutlet UILabel *centerLabel;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (IBAction)buttonTapped:(id)sender {
    UIButton *tappedButton = (UIButton *)sender;
    self.centerLabel.text = [NSString stringWithFormat:@"%@ Tapped", tappedButton.titleLabel.text];
}

@end
