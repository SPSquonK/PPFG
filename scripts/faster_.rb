class PokeBattle_Battle
  def pbLearnMove(pkmnIndex, move)
    pokemon = @party1[pkmnIndex]
    return if !pokemon
    pkmnname = pokemon.name
    battler = pbFindPlayerBattler(pkmnIndex)
    movename = PBMoves.getName(move)
    for i in 0...4
      return if pokemon.moves[i].id == move
      if pokemon.moves[i].id == 0
        pokemon.moves[i] = PBMove.new(move)
        battler.moves[i] = PokeBattle_Move.pbFromPBMove(self, pokemon.moves[i]) if battler
        pbDisplayPaused(_INTL("{1} learned {2}!", pkmnname, movename))
        return
      end
    end
    loop do
      pbDisplayPaused(_INTL("{1} is trying to learn {2}.", pkmnname, movename))
      if pbDisplayConfirm(_INTL("Delete a move to make room for {1}?", movename))
        pbDisplayPaused(_INTL("Which move should be forgotten?"))
        forgetmove = @scene.pbForgetMove(pokemon, move)
        if forgetmove >= 0
          oldmovename = PBMoves.getName(pokemon.moves[forgetmove].id)
          pokemon.moves[forgetmove] = PBMove.new(move) # Replaces current/total PP
          battler.moves[forgetmove] = PokeBattle_Move.pbFromPBMove(self, pokemon.moves[forgetmove]) if battler
          pbDisplayPaused(_INTL("{1} learned {2}!", pkmnname, movename))
          PBDebug.log("[Learn move] #{pkmnname} forgot #{oldmovename} and learned #{movename}")
          return
        elsif pbDisplayConfirm(_INTL("Should {1} stop learning {2}?", pkmnname, movename))
          pbDisplayPaused(_INTL("{1} did not learn {2}.", pkmnname, movename))
          return
        end
      elsif pbDisplayConfirm(_INTL("Should {1} stop learning {2}?", pkmnname, movename))
        pbDisplayPaused(_INTL("{1} did not learn {2}.", pkmnname, movename))
        return
      end
    end
  end
end

class PokeBattle_Scene
  def pbLevelUp(pokemon, battler, oldtotalhp, oldattack, olddefense, oldspeed, oldspatk, oldspdef)
  end
end
