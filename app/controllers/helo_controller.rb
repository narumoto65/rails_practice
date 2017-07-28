class HeloController < ApplicationController
	#protect_from_forgery
    layout 'helo'

    def index
        @header= 'layout sample'
        @footer= 'copyright SERA NARUMOTO 2017'
        @title='New Layout'
        @msg = 'this is sample page!'
    end
end 
        
	    #if params['msg'] != nil then
        #    @title = params['msg']
        #else
        #    @title = 'index'

        #end
        #@msg = 'this is a redirect sample'
        #if request.post? then
        #    @title = 'Result'
        #    if params['s1'] then
        #        @msg = 'you Selected: '
        #        for val in params['s1']
        #            @msg += val + ''
        #        end
        #    else
        #        @msg= "you didn't check it"
        #    end
             
            #@msg = 'you typed: ' +params['input1'] + '.'
            #@value = params['input1']
            
        #else 
        #    @title = 'Index'
        #    @msg = 'choose an option...'
            #@value = ''
        #end 
    #end
    #def other
    #    redirect_to action: :index, msg:'from other page'
    #end
#end
