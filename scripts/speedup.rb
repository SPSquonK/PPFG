#===============================================================================
# Speed up script by KleinStudio
# http://kleinstudio.deviantart.com
#===============================================================================

module Input
  if !defined?(kleinfast_update)
    class << self
      alias kleinfast_update update
    end
  end

  def self.update
    if Input.trigger?(Input::ALT)
      if !@setFast
        Graphics.frame_rate = 160
        @setFast = true
      else
        Graphics.frame_rate = 40 if @setFast
        @setFast = false
      end
    end
    kleinfast_update
  end
end
