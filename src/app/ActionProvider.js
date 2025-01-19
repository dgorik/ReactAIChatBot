import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: '03a0006726ac4055bad84abb9633c2ef',
    baseURL: 'https://api.aimlapi.com',
    dangerouslyAllowBrowser: true,

})

class ActionProvider {

    callGenAI = async(promp) => {
        constChatCompletion = await openai.chat.completions.create()
            {
              model: ''  
            }

    }
}