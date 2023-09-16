window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()

    document.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            click.blur()
        }
    })

    const counter = document.querySelector('.counter'),
          click = document.querySelector('.click'),
          clicksForOneClick = document.querySelector('.clicks-for-one-click'),
          upgrades = document.querySelector('.upgrades'),
          upgrade10 = document.querySelector('.upgrade10'),
          upgrade50  = document.querySelector('.upgrade50'),
          upgrade100 = document.querySelector('.upgrade100'),
          asyncUpgrade25 = document.querySelector('.asyncUpgrade25'),
          asyncUpgrade50 = document.querySelector('.asyncUpgrade50'),
          counterSubheader = document.querySelector('.counter_subheader'),
          colorInterface = document.querySelector('.color_interface'),
          colorInterfaceButton = document.querySelector('.color_interface_button'),
          colorFont = document.querySelector('.color_font'),
          colorFontButton = document.querySelector('.color_font_button'),
          reset = document.querySelector('.reset'),
          userColor = document.querySelector('.user_color'),
          userColorButton = document.querySelector('.user_color_button'),
          buttons = document.querySelectorAll('button'),
          statistics = document.querySelector('.statistics'),
          allClicksSubheader = document.querySelector('.allClicksSubheader'),
          allUpgradeSubheader = document.querySelector('.allUpgradeSubheader'),
          design = document.querySelector('.design'),
          designBack = document.querySelector('.modal-window_designBack'),
          designSubstrate = document.querySelector('.modal-window_designSubstrate'),
          statisticsSubstrate = document.querySelector('.modal-window_statisticsSubstrate'),
          statisticsBack = document.querySelector('.statisticsBack'),
          wrongPromoSubstrate = document.querySelector('.modal-window_wrongPromoSubstrate'),
          wrongPromoBack = document.querySelector('.wrongPromoBack'),
          promoValue = [],
          promo = document.querySelector('.promo'),
          promoButton = document.querySelector('.promoButton'),
          settingsSubstrate = document.querySelector('.modal-window_settingsSubstrate'),
          settingsBack = document.querySelector('.settingsBack'),
          settings = document.querySelector('.settings'),
          upgradesSubstrate = document.querySelector('.modal-window_upgradesSubstrate'),
          upgradesBack = document.querySelector('.modal-window_upgradesBack'),
          notEnoughSubstrateModalShow = document.querySelector('.notEnoughSubstrateModalShow'),
          notEnoughModalShowBack = document.querySelector('.notEnoughModalShowBack'),
          notEnoughModalShowClose = document.querySelector('.notEnoughModalShowClose'),
          notEnoughSubheader = document.querySelector('.notEnoughSubheader'),
          notEnoughHeader = document.querySelector('.notEnoughHeader')



    let count = 0,
        upgrade = 0,
        allClicks = 0,
        allUpgrade = 0,
        allAsyncUpgrade = 0,
        clicksPerMinute = 0

// Work Zone

 


// Function

    const windowClickModalWindow = (substrateModal, substrateModal2 = substrateModal) => {
        window.addEventListener('click', e => {
            if (e.target == substrateModal) {
                substrateModal.classList.add('hidden')
                substrateModal2.classList.add('hidden')
            }
        })
    }
    const a = (substrateClose, substrateBack, substrateModal, upgradSubstrate) => {
        
        substrateClose.addEventListener('click', () => {
            substrateModal.classList.add('hidden')
        })
        substrateBack.addEventListener('click', () => {
            upgradSubstrate.classList.add('hidden')
        })
        substrateModal.addEventListener('click', () => {
            windowClickModalWindow(notEnoughSubstrateModalShow, upgradesSubstrate)
        })
    }

    const modalWindow = (substrateModal, backModal) => {

        substrateModal.classList.remove('hidden')


        backModal.addEventListener('click', () => {
            substrateModal.classList.add('hidden')
        })

        windowClickModalWindow(substrateModal)

        window.addEventListener('keydown', e => {
            if (e.key == 'Escape') {
                substrateModal.classList.add('hidden')
                buttons.forEach(btn => {
                    btn.blur()
                })
            }
        })
    }

    const examinationUpgrade = (button, count1, number) => {
        if (count >= count1) {
            button.setAttribute("disabled", "disabled")
            count -= count1
            upgrade += number
            counter.textContent = count

            allUpgrade++
            clicksForOneClick.textContent = `+${upgrade + 1}`
            allUpgradeSubheader.textContent =  `Всего апгрейдов: ${allUpgrade}`
        }
         else {
            modalWindow(notEnoughSubstrateModalShow, notEnoughModalShowBack)
            notEnoughSubheader.textContent = `Кликов нужно: ${count1 - count}`
            a(notEnoughModalShowClose, notEnoughModalShowBack, notEnoughSubstrateModalShow, upgradesSubstrate)
        }

    }
    

    const asyncUpgrade = (button, add, speed, count1) => {
        if (count >= count1) {
            button.setAttribute('disabled', 'disabled')
            count -= count1
            counter.textContent = count

            allUpgrade++
            allUpgradeSubheader.textContent =  `Всего апгрейдов: ${allUpgrade}`
            setInterval(() => {
                count += add
                counter.textContent = count
            }, speed)
        } 
        else {
            modalWindow(notEnoughSubstrateModalShow, notEnoughModalShowBack)
            notEnoughSubheader.textContent = `Кликов нужно: ${count1 - count}`
            a(notEnoughModalShowClose, notEnoughModalShowBack, notEnoughSubstrateModalShow, upgradesSubstrate)
        }

    }

// Call Function

    // Upgrdes
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
        asyncUpgrade(asyncUpgrade25, 1, 1000, 25)
    })

    asyncUpgrade50.addEventListener('click', () => {
        asyncUpgrade(asyncUpgrade50, 1, 2000, 50)
    })

    // Admin Menu
    upgrades.addEventListener('click', () => {
        modalWindow(upgradesSubstrate, upgradesBack)
    })

    design.addEventListener('click', () => {
        modalWindow(designSubstrate, designBack)
    })

    statistics.addEventListener('click', () => {
        modalWindow(statisticsSubstrate, statisticsBack)
    })

    settings.addEventListener('click', () => {
        e.preventDefault()

        modalWindow(settingsSubstrate, settingsBack)
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
        // Promo
        // promoButton.addEventListener('click', e => {
        //     e.preventDefault()

        //     if (promo.value === 'KSNDknDkjaMjls') {
        //         if (promoValue.includes('KSNDknDkjaMjls')) {
        //             console.log('Вы уже вводили этот промокод!')
        //             modalWindow(notEnoughSubstrateModalShow, notEnoughModalShowBack)
        //             notEnoughHeader.textContent = 'Вы уже вводили этот промокод!'
        //         } else {
        //             promoValue.push(promo.value)
        //             count += 50;
        //             counter.textContent = count
        //         }

        //     } else if (promo.value != 'KSNDknDkjaMjls') {
        //         designSubstrate.classList.add('hidden')
        //         modalWindow(wrongPromoSubstrate, wrongPromoBack)
        //     }
        //     promo.value = ''
        // })



// Click

    click.addEventListener('click', () => {
        count++
        count += upgrade
        counter.textContent = count


        allClicks++
        allClicksSubheader.textContent = `Всего кликов: ${allClicks}`
    })

})


