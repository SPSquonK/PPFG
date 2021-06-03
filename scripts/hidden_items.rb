Events.onStepTaken += proc { $game_screen.aUpdateRadar }

ItemHandlers::UseInField.add(:ITEMFINDER, proc { |item|
  $game_screen.aToggleRadar
  $game_screen.aUpdateRadar
})

class Game_Screen
  def aCheckItemsFoundDefined
    if !defined?($aItemsFound) || $aItemsFound.disposed?
      $aItemsFound = Sprite.new(nil)
      $aItemsFound.bitmap = Bitmap.new(Graphics.width, Graphics.height)
      $aItemsFound.ox = 0
      $aItemsFound.oy = 0
      $aItemsFound.z = 9998
      $aItemsFound.visible = true
    end
  end

  def aCheckScroll(adX, adY)
    aCheckItemsFoundDefined
    $aItemsFound.ox = ($game_player.real_x / Game_Map::XSUBPIXEL) - (($game_player.x - adX) * Game_Map::TILEWIDTH)
    $aItemsFound.oy = ($game_player.real_y / Game_Map::YSUBPIXEL) - (($game_player.y - adY) * Game_Map::TILEHEIGHT)
  end

  def aUpdateRadar
    aCheckItemsFoundDefined
    aItemsFoundBitmap = AnimatedBitmap.new(_INTL("B:/SWM - ItemRadar"))

    playerX = $game_player.x
    playerY = $game_player.y

    aOffsetX = ((Graphics.width - Game_Map::TILEWIDTH) / 2)
    aOffsetY = ((Graphics.height - Game_Map::TILEHEIGHT) / 2)

    $aItemsFound.bitmap = Bitmap.new(Graphics.width, Graphics.height)
    $aItemsFound.ox = 0
    $aItemsFound.oy = 0

    for event in $game_map.events.values
      next if event.name != "HiddenItem"
      next if (playerX - event.x).abs >= 8
      next if (playerY - event.y).abs >= 6
      next if $game_self_switches[[$game_map.map_id, event.id, "A"]]
      next if $game_self_switches[[$game_map.map_id, event.id, "B"]]
      next if $game_self_switches[[$game_map.map_id, event.id, "C"]]
      next if $game_self_switches[[$game_map.map_id, event.id, "D"]]

      $aItemsFound.bitmap.blt(aOffsetX + (event.x - playerX) * Game_Map::TILEWIDTH, aOffsetY + (event.y - playerY) * Game_Map::TILEHEIGHT, aItemsFoundBitmap.bitmap, aItemsFoundBitmap.bitmap.rect)
    end
  end
end

class Game_Map
  def scroll_down(distance)
    self.display_y += distance
    $game_screen.aCheckScroll(0, +1)
  end

  def scroll_left(distance)
    self.display_x -= distance
    $game_screen.aCheckScroll(-1, 0)
  end

  def scroll_right(distance)
    self.display_x += distance
    $game_screen.aCheckScroll(+1, 0)
  end

  def scroll_up(distance)
    self.display_y -= distance
    $game_screen.aCheckScroll(0, -1)
  end
end
