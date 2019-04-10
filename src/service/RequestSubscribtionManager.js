const Register = subscribtion => {

    console.info('SubscribtionManager','register',subscribtion,later)
    let dataUpdate=later.parse.text(subscribtion.frequency)

    // set up request interval
    subscribtion.timer=later.setInterval(()=>{
        console.info('SubscribtionManager','interval',subscribtion)
        subscribtion.retrieve()
      },dataUpdate)

    // fire initial data request
    subscribtion.retrieve()

    return subscribtion.timer
}

const UnRegister = subscribtion => {

    console.info('SubscribtionManager','unregister',subscribtion,later)
    subscribtion.timer.clear()
}

export default {
    register: subscribtion => Register(subscribtion),
    unregister: subscribtion => UnRegister(subscribtion)
}
