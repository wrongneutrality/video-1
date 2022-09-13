const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress =document.querySelector('#progress')

    $play.addEventListener('click', handleplay)
        function handleplay(){
            $video.play()
            $play.hidden = true
            $pause.hidden = false
            console.log('le diste click al boton de play')
        }

    $pause.addEventListener('click', handlepause)
        function handlepause(){
            $video.pause()
            $play.hidden = false
            $pause.hidden = true
            console.log('le diste click al boton de pause')
        }

    $backward.addEventListener('click', handlebackward)
        function handlebackward(){
            $video.currentTime = $video.currentTime - 10
            console.log('para atras 10 segundos', $video.currentTime)
        }

    $forward.addEventListener('click', handleforward)
        function handleforward(){
            $video.currentTime = $video.currentTime + 10
            console.log('para adelante 10 segundos', $video.currentTime)
        }

    $video.addEventListener('loadedmetadata', handleloaded)
        function handleloaded(){
            $progress.max = $video.duration
            console.log('ha cargado mi video', $video.duration)
        }

    $video.addEventListener('timeupdate', handletimeupdate)
        function handletimeupdate(){
            $progress.value = $video.currentTime
            console.log('tiempo actual', $video.currentTime)
        }

    $progress.addEventListener('input', handleinput)
        function handleinput(){
            $video.currentTime = $progress.value
            console.log('$progress.value')
        }

    