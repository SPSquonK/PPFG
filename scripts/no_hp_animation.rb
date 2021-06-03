# From Reborn SWM
class PokemonDataBox < SpriteWrapper
  def animateHP(oldhp, newhp)
    @starthp = newhp
    @currenthp = newhp
    @endhp = newhp
    @animatingHP = true
  end
end
