window.addEventListener('DOMContentLoaded', () => {


  
        let lists = document.querySelectorAll('.child')
        const next = document.querySelector('.next')
        const prev = document.querySelector('.prev')
        const btnsline=document.querySelector('.btns-line')

        let index = 0

        next.addEventListener('click', () => {
            index++
            if (index > 0 && index < lists.length) {
                lists[index].style.transform = `translateX(-${400 * index}px)`
            } else {
                lists.forEach((item, id) => {
                    item.style.transform = `translateX(0)`
                })
                index = 0
            }
        })

        prev.addEventListener('click', () => {
            index--
            if (index >= 0 && index < lists.length) {
                lists.forEach((item, id) => {
                    item.style.transform = `translateX(0)`
                })
                lists[index].style.transform = `translateX(-${400 * index}px)`

            } else {
                index = lists.length - 1
                lists[index].style.transform = `translateX(-${400 * index}px)`
            }
        })

        lists.forEach((item,ind,arr)=>{
            let btn=document.createElement('button')
            btn.innerText=ind+1
            btnsline.append(btn)
            btn.classList.add('line')
            
        })

        document.querySelectorAll('.line').forEach((item,index)=>{
            
            item.addEventListener('click',(e)=>{
                 lists.forEach((item, id) => {
                    item.style.transform = `translateX(0)`
                })
                lists[+e.target.innerText-1].style.transform=`translateX(-${400*(+e.target.innerText-1) }px)`
            })
        })




})