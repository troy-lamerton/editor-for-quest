# Quest Editor Documentation

## Commands

When specifying a name you can include `*` at the start or end to match different things.

`"* crab"` will match Sand crab, Ammonite crab, etc. When using `*` you must surround the text with "quotes".

### Aggrovate

```YAML
- Aggrovate: Skeleton
```

Attacks the specified monster until the player is hit.

### Bank

```YAML
- Bank:
    deposit: everything
```

```YAML
- Bank:
    withdraw:
      - Food, 5
```

```YAML
- Bank:
    deposit: inventory
    withdraw:
      - "Staff of *"
      - Fire rune, 100
```

Walks to the nearest bank and then deposits your inventory or everything (inventory and equipment).
Withdraws the list of items or 1 if no amount is specified.

`Food` is used to withdraw any of the following items:

* Salmon
* Tuna
* Bass
* Lobster
* Swordfish
* Shark

### Book

```YAML
- Book: Book of baxtorian
```

Searches every nearby Bookcase until you receive the specified book. Then opens the book. It will not read through the pages.

### Climb

```YAML
- Climb: up
```

```YAML
- Climb: down
```

Climbs the nearest Ladder, Stair* or Trapdoor.

### Equip

```YAML
- Equip: Dramen staff
```

Equips an item that is in your inventory.

### Expect

```YAML
- Expect: Hammer
```

```YAML
- Search: Cupboard
  Expect: Garlic
```

```YAML
- Talk: Jesus
  Expect: Holy water
```

Expect that the player has an item in their inventory. If combined with another command, Quest will repeat the other command until the item is received.

### Fight

```YAML
- Fight: Giant rat
```

Engages in combat with the specified Npc. Quest will always eat food in the inventory when health gets low.

### Interact

```YAML
- Interact: Open on Trapdoor
```

Performs the action on the scene object.

### Open

```YAML
- Open: Large door
```

Open a named door by doing the Open action on the scene object.

### ReturnOnDeath (Beta)

```YAML
- ReturnOnDeath: true
  Bank:
    withdraw:
      - food, 10
```

When combined with another action, Quest will return to this step if the player dies during this step or later on. Usually best placed on a Bank or Walk command.

### Search

```YAML
- Search: Crates
```

```YAML
- Search: 23625 # Cadava bush with berries
  Expect: "*cadava"
```

Searches the specified scene object nearby. Search can open doors to reach the target.

### Take

```YAML
- Take: Oil can
```

Picks up the item off the ground

### Talk

```YAML
- Talk: King Roald
```

```YAML
- Talk: King Roald, 1, 1
```

```YAML
- Talk: continue
```

```YAML
- Talk: 1
```

Starts talking with the Npc, continuing the dialog until the end. If chat options are specified, they will be used when there is a choice. 1 is the first chat option.

Talk can open doors to reach the Npc.

### Use

```YAML
- Use: Tinderbox on Logs
```

```YAML
- Use: Blessed water on Coffin
```

```YAML
- Use: Air rune on (3204, 5678)
```

Uses an item on the second thing. The item must be in your inventory. The thing can be an item in your inventory, a nearby scene object or a nearby Npc. Use will NOT open doors to reach the target. Expect does not work with Use but you can do Wait instead.

The second thing can also be a position. Quest will use your item on the scene object at that position.

### Wait

```YAML
- Wait: 3
```

Quest will do nothing for the number of seconds.

### Walk

```YAML
- Walk: Varrock
```

```YAML
- Walk: Vampire Slayer
```

```YAML
- Walk: (3204, 3233, 1)
```

Walk to the named location or position. Positions must be in the format `(x, y)` on the ground floor or `(x, y, floorLevel)`.

Named locations include all of the locations in [Explv's map tool](https://explv.github.io/).

### Cutscene

```YAML
- Cutscene: true
```

At the moment this can only be used in the official questers. Waits for the cutscene to finish.
