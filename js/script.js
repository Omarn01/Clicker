window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()

    document.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            click.blur()
        }
    })

    const counter = document.querySelector('.counter'),
          click = document.querySelector('.click'),
          upgrade10 = document.querySelector('.upgrade10'),
          upgrade50  = document.querySelector('.upgrade50'),
          upgrade100 = document.querySelector('.upgrade100'),
          asyncUpgrade25 = document.querySelector('.asyncUpgrade25'),
          asyncUpgrade50 = document.querySelector('.asyncUpgrade50'),
          colorInterface = document.querySelector('.color_interface'),
          colorInterfaceButton = document.querySelector('.color_interface_button'),
          colorFont = document.querySelector('.color_font'),
          colorFontButton = document.querySelector('.color_font_button'),
          reset = document.querySelector('.reset'),
          userColor = document.querySelector('.user_color'),
          userColorButton = document.querySelector('.user_color_button'),
          buttons = document.querySelectorAll('button'),
          statistics = document.querySelector('.statistics'),
          statisticsSubstrateModalShow = document.querySelector('.statisticsSubstrateModalShow'),
          statisticsModalShowBack = document.querySelector('.statisticsModalShowBack'),
          allClicksSubheader = document.querySelector('.allClicksSubheader'),
          allUpgradeSubheader = document.querySelector('.allUpgradeSubheader'),
          promoValue = [],
          promo = document.querySelector('.promo'),
          promoButton = document.querySelector('.promoButton'),
          notEnoughSubstrateModalShow = document.querySelector('.notEnoughSubstrateModalShow'),
          notEnoughModalShowBack = document.querySelector('.notEnoughModalShowBack'),
          notEnoughSubheader = document.querySelector('.notEnoughSubheader'),
          notEnoughHeader = document.querySelector('.notEnoughHeader')



    let count = 0,
        upgrade = 0,
        allClicls = 0,
        allUpgrade = 0

// Work Zone

 



// Function

    const modalWindow = (substrateModal, backModal) => {

        substrateModal.classList.remove('hidden')


        backModal.addEventListener('click', () => {
            substrateModal.classList.add('hidden')
        })

        window.addEventListener('click', e => {
            if (e.target == substrateModal) {
                substrateModal.classList.add('hidden')
            }
        })

        window.addEventListener('keydown', e => {
            if (e.key == 'Escape') {
                substrateModal.classList.add('hidden')
                // openModal.blur()
                buttons.forEach(btn => {
                    btn.blur()
                })
            }
        })
    }

    const modalWindowClick = (substrateModal, backModal) => {
        substrateModal.classList.remove('hidden')

        modalWindow(substrateModal, backModal)
    }

    const examinationUpgrade = (button, count1, number) => {
        if (count >= count1) {
            button.setAttribute("disabled", "disabled")
            count -= count1
            upgrade += number
            counter.textContent = count

            allUpgrade++
            allUpgradeSubheader.textContent =  `Всего апгрейдов: ${allUpgrade}`
        } else {
            modalWindow(notEnoughSubstrateModalShow, notEnoughModalShowBack)
            notEnoughSubheader.textContent = `Кликов нужно: ${count1 - count}`
        }

    }

    const asyncUpgrade = (button, add, speed, count1) => {
        if (count >= count1) {
            button.setAttribute('disabled', 'disabled')
            count -= count1
            counter.textContent = count
            setInterval(() => {
                count += add
                counter.textContent = count
            }, speed)
        } else {
            modalWindow(notEnoughSubstrateModalShow, notEnoughModalShowBack)
            notEnoughSubheader.textContent = `Кликов нужно: ${count1 - count}`
        }

    }

// Call Function

    upgrade10.addEventListener('click', () => {
        examinationUpgrade(upgrade10, 10, 1)
    })

    upgrade50.addEventListener('click', () => {

        if (upgrade10.hasAttribute('disabled')) {examinationUpgrade(upgrade50, 50, 1)}
        else console.log('Купите сначала upgrade10!')

    })

    upgrade100.addEventListener('click', () => {

        if (upgrade50.hasAttribute('disabled')) {examinationUpgrade(upgrade100, 100, 2)}
        else console.log('Купите сначала upgrade50!')

    })
    
    asyncUpgrade25.addEventListener('click', () => {
        asyncUpgrade(asyncUpgrade25, 1, 3000, 25)
    })

    asyncUpgrade50.addEventListener('click', () => {
        asyncUpgrade(asyncUpgrade50, 1, 2000, 50)
    })

// Modal Window



// Costomisation

    colorInterfaceButton.addEventListener('click', e => {
        e.preventDefault()
        buttons.forEach((btn) => {
            btn.style.backgroundColor = colorInterface.value  
        })
    })

    userColorButton.addEventListener('click', e => {
        e.preventDefault()
        if (userColor.value) {
            buttons.forEach((btn) => {
                btn.style.backgroundColor = userColor.value
            })
        } else console.log('Неверно')


    })

    colorFontButton.addEventListener('click', e => {
        e.preventDefault()
        buttons.forEach((btn) => {
            btn.style.color = colorFont.value
        })
    })

    reset.addEventListener('click', e => {
        e.preventDefault()
        buttons.forEach((btn) => {
            btn.style.backgroundColor = 'rgb(40, 40, 182)'
            btn.style.color = 'white'
        })
    })

    // Statistics 
    statistics.addEventListener('click', () => {
        modalWindowClick(statisticsSubstrateModalShow, statisticsModalShowBack)
    })
        // Promo
        promoButton.addEventListener('click', e => {
            e.preventDefault()

            if (promo.value === 'KSNDknDkjaMjls') {
                if (promoValue.includes('KSNDknDkjaMjls')) {
                    console.log('Вы уже вводили этот промокод!')
                    modalWindow(notEnoughSubstrateModalShow, notEnoughModalShowBack)
                    notEnoughHeader.textContent = 'Вы уже вводили этот промокод!'
                } else {
                    promoValue.push(promo.value)
                    count += 50;
                    counter.textContent = count
                }

            } else if (promo.value != 'KSNDknDkjaMjls') {
                modalWindow(notEnoughSubstrateModalShow, notEnoughModalShowBack)
                notEnoughHeader.textContent = 'Неправильный промокод!'
            }
            promo.value = ''
        })



// Click

    click.addEventListener('click', () => {
        count++
        count += upgrade
        counter.textContent = count

        allClicls++
        allClicksSubheader.textContent = `Всего кликов: ${allClicls}`
    })

})


