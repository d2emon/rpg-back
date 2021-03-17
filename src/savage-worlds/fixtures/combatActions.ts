const combatActions: any[] = [
    /*
Aim
    +2 Shooting / Throwing if the character doesn’t move or take other actions
Area of Effect
    Targets touching template suffer damage; Ignore non–sealed armor, treat
    cover as Armor; Missed attack rolls deviate 1d6” for thrown weapons or
    1d10” for launched weapons (x2 for Medium Range, x3 for Long Range)
Automatic Fire
    Roll Shooting dice equal to RoF (plus Wild Die if Wild Card); Attack is
    made at –2 for recoil
Breaking Things
    See Obstacle Toughness Table; Parry 2; No bonus damage or Aces
Called Shots
    Limb –2; Head –4 (+4 Damage); Small Target –4; Tiny Target –6
Cover
    Light –1; Medium –2; Heavy –4; Near Total –6
Darkness
    Dim –1; Dark –2 (targets not visible beyond 10”); Pitch Dark targets must
    be detected to be attacked with a –4
Defend
    +2 Parry; Character may take no other actions but may move
Disarm
    –2 Attack; defender makes Str roll vs. damage or drops weapon
Double Tap
    +1 Shooting / +1 Damage; May not be combined with Autofire or Three Round
    Burst
Drop
    +4 to attack and damage
Finishing Move
    Instant kill to helpless foe with a lethal weapon
Full Defense
    Fighting roll +2; replaces Parry if higher; cannot move
Ganging Up
    +1 Fighting per additional adjacent attacker; maximum +4
Grappling
    Opposed Fighting roll to grapple. Raise = opponent Shaken, Defender makes
    opposed Strength or Agility roll to break free (any other action made at
    –4); Attacker can make an opposed Strength or Agility roll to cause damage
    (Damage = Strength)
Improvised Weapons
    –1 to attack and Parry; RoF 1 only
    *   Small Weapons: Range 3/6/12, Damage Str+d4, Min Str d4
    *   Medium Weapons: Range 2/4/8, Damage Str+d6, Min Str d6
    *   Large Weapons: Range 1/2/4, Damage Str+d8, Min Str d8
Innocent Bystanders
    Missed Shooting / Throwing roll with a 1 (1 or 2 for shotgun or automatic
    fire) on the skill die hits a random adjacent target
Mounted
    Combat Mount and rider act on same card; Rider attacks with lower of
    Fighting or Riding; Shooting incurs –2 Unstable Platform penalty; Charging
    is +4 Damage but requires 6” of straight movement
Nonlethal Damage
    Declare prior to making an attack roll; Targets are knocked out for 1d6
    hours instead of potentially killed when Incapacitated
Obstacles
    If the attack misses due to the Cover penalty, the obstacle adds to Armor
Off Hand Attack
    –2 to attack rolls with off hand
Prone
    As Medium Cover, prone defenders are –2 Fighting and –2 Parry; Ranged
    attacks within 3” ignore cover
Push
    Attacker chooses option below and makes opposed Strength roll (add +2 if
    attacker moved more than 3” toward target):
    *   Bash: Push target 1” on a success, 2” on a raise. If the target hits an
        obstacle he also takes 1d6 per 1” pushed.
    *   Shield Bash: As above but causes Strength damage; +1 for small shield,
        +2 for medium shield, and +3 for large shield
    *   Knock Prone: The defender is knocked prone
Range Modifiers
    Short: 0, Medium: –2, Long: –4
Ranged attacks in Close Combat
    Attacker may use no weapon larger than a pistol; Target Number is
    defender’s Parry
Rapid Attack
    –2 Parry; Make up to 3 Fighting Attacks (+Wild Die) at –4, or fire up to 6
    shots from a semi–automatic weapon or revolver at –4 penalty to each die
Suppressive Fire
    With a successful Shooting roll, targets in a Medium Burst Template make a
    Spirit roll or are Shaken, those who roll a 1 are hit
Tests of Will
      Contest of Taunt vs. Smarts or Intimidation vs. Spirit; If successful +2
    on next action against target; With a raise the target is Shaken as well
Three Round Burst
    +2 Shooting / +2 Damage; May not be combined with Autofire or Double Tap
Touch Attack
    +2 to Fighting roll
Tricks
    Describe action; Make opposed Agility or Smarts roll; Opponent is –2 Parry
    until his next action; With a raise, foe is –2 Parry and Shaken
Two Weapons
    –2 attack; Additional –2 for off–hand if not Ambidextrous
Unarmed Defender
    Armed attackers gain +2 Fighting versus this defender
Unstable Platform
    –2 Shooting from a moving vehicle, animal, or other unstable surface
Wild Attack
    +2 Fighting, +2 Damage, –2 Parry until the attacker’s next action
Withdrawing from Combat
    Non-Shaken adjacent foes get one free attack at retreating character
     */
];

export default combatActions;