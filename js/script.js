window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()

    document.addEventListener('keydown', event => {
        if (event.key == 'Enter') {
            click.blur()
        }
    })

    const counter = document.querySelector('.counter'),
          click = document.querySelector('.click'),
          clicksForOneClick = document.querySelector('.clicks-for-one-click'),
          buyPreviousUpgradeSubstrate = document.querySelector('.modal-window_buyPreviousUpgradeSubstrate'),
          buyPreviousUpgradeBack = document.querySelector('.buyPreviousUpgradeBack'),
          badLuckSubstrate = document.querySelector('.modal-window_badLuckSubstrate'),
          badLuckBack = document.querySelector('.badLuckBack'),
          badLuckSubheader = document.querySelector('.badLuckSubheader'),
          upgrades = document.querySelector('.upgrades'),
          upgrade10 = document.querySelector('.upgrade10'),
          upgrade50  = document.querySelector('.upgrade50'),
          upgrade100 = document.querySelector('.upgrade100'),
          upgrade200 = document.querySelector('.upgrade200'),
          upgrade500 = document.querySelector('.upgrade500'),
          asyncUpgrade25 = document.querySelector('.asyncUpgrade25'),
          asyncUpgrade50 = document.querySelector('.asyncUpgrade50'),
          asyncUpgrade250 = document.querySelector('.asyncUpgrade250'),
          asyncUpgrade1000 = document.querySelector('.asyncUpgrade1000'),
          asyncUpgrade5000 = document.querySelector('.asyncUpgrade5000'),
          asyncUpgrade25000 = document.querySelector('.asyncUpgrade25000'),
          counterSubheader = document.querySelector('.counter_subheader'),
          colorInterface = document.querySelector('.color_interface'),
          colorInterfaceButton = document.querySelector('.color_interface_button'),
          colorFont = document.querySelector('.color_font'),
          colorFontButton = document.querySelector('.color_font_button'),
          reset = document.querySelector('.reset'),
          userColor = document.querySelector('.user_color'),
          userColorButton = document.querySelector('.user_color_button'),
          wrongColor = document.querySelector('.wrongColor'),
          wrongFormat = document.querySelector('.wrongFormat'),
          wrongForm = document.querySelector('.wrongForm'),
          buttons = document.querySelectorAll('button'),
          statistics = document.querySelector('.statistics'),
          allClicksSubheader = document.querySelector('.allClicksSubheader'),
          allUpgradeSubheader = document.querySelector('.allUpgradeSubheader'),
          design = document.querySelector('.design'),
          designBack = document.querySelector('.modal-window_designBack'),
          designSubstrate = document.querySelector('.modal-window_designSubstrate'),
          statisticsSubstrate = document.querySelector('.modal-window_statisticsSubstrate'),
          statisticsBack = document.querySelector('.statisticsBack'),
          achievementProgress = document.querySelector('.achievement_progress'),
          achievementItem = document.querySelector('.achievement_item'),
          wrongPromoSubstrate = document.querySelector('.modal-window_wrongPromoSubstrate'),
          wrongPromoBack = document.querySelector('.wrongPromoBack'),
          promoValue = [],
          promo = document.querySelector('.promo'),
          promoButton = document.querySelector('.promoButton'),
          repitionPromoSubstrate = document.querySelector('.modal-window_repitionPromoSubstrate'),
          repitionPromoBack = document.querySelector('.repitionPromoBack'),
          settingsSubstrate = document.querySelector('.modal-window_settingsSubstrate'),
          settingsBack = document.querySelector('.settingsBack'),
          settings = document.querySelector('.settings'),
          correctPromoSubstrate = document.querySelector('.modal-window_correctPromoSubstrate'),
          correctPromoBack = document.querySelector('.correctPromoBack'),
          achievements = document.querySelector('.achievements'),
          achievementaSubstrate = document.querySelector('.modal-window_achievementaSubstrate'),
          achievementsBack = document.querySelector('.achievementsBack'),
          upgradesSubstrate = document.querySelector('.modal-window_upgradesSubstrate'),
          upgradesBack = document.querySelector('.modal-window_upgradesBack'),
          doubleClickEventSubstrate = document.querySelector('.modal-window_doubleClickEventSubstrate'),
          doubleClickEventBack = document.querySelector('.doubleClickEventBack'),
          notEnoughSubstrateModalShow = document.querySelector('.notEnoughSubstrateModalShow'),
          notEnoughModalShowBack = document.querySelector('.notEnoughModalShowBack'),
          notEnoughModalShowClose = document.querySelector('.notEnoughModalShowClose'),
          notEnoughSubheader = document.querySelector('.notEnoughSubheader'),
          promocode = 'KSNDknDkjaMjls'



    let count = 0,
        tf = false,
        upgrade = 0,
        allClicks = 0,
        allUpgrade = 0,
        carrotCount = 60,
        clicksForSecond = 0, 
        badEventInterval = Math.round(Math.random() * (1_200_000 - 36_000))

// Work Zone




// Function
    const badEvent = (interval) => {
        setInterval(() => {
            quantity = (count / 100) * Math.round(Math.random() * (90 - 1))
            count -= quantity.toFixed()
            counter.textContent = count
            modalWindow(badLuckSubstrate, badLuckBack)
            badLuckSubheader.textContent = `-${quantity.toFixed()} кликов`
        }, interval)
    }

    const doubleClicksEvent = (interval) => {

        setInterval(() => {
            modalWindow(doubleClickEventSubstrate, doubleClickEventBack)
            
    
            setTimeout(() => {
                doubleClickEventSubstrate.classList.add('hidden')
            }, 3000)
    
    
            tf = true
            const timer = setInterval(function() {
                if (carrotCount <= 0) {
                  tf = false
                  clearInterval(timer)
                }
                carrotCount--;
              }, 1000);
    
              if (carrotCount != 0) {
                click.addEventListener('click', () => {
                    if (tf) {
                        clicksForOneClick.textContent = `+${upgrade + 10}`
                        count += 10
                        counter.textContent = count
                    }
                })
              }
    
            }, interval)
    }

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
            button.classList.add('hidden')
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
            // button.setAttribute('disabled', 'disabled')
            button.classList.add('hidden')
            count -= count1
            counter.textContent = count
            clicksForSecond += add / speed * 1000
            counterSubheader.textContent = `Кликов в секунду: +${clicksForSecond.toFixed()}`

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

        if (upgrade10.classList.contains('hidden')) {examinationUpgrade(upgrade50, 50, 1)}
        else modalWindow(buyPreviousUpgradeSubstrate, buyPreviousUpgradeBack)

    })

    upgrade100.addEventListener('click', () => {

        if (upgrade50.classList.contains('hidden')) examinationUpgrade(upgrade100, 100, 2)
        else modalWindow(buyPreviousUpgradeSubstrate, buyPreviousUpgradeBack)

    })

    upgrade200.addEventListener('click', () => {
        
        if (upgrade100.classList.contains('hidden')) {examinationUpgrade(upgrade200, 200, 5)}
        else modalWindow(buyPreviousUpgradeSubstrate, buyPreviousUpgradeBack)

    })
    
    upgrade500.addEventListener('click', () => {
        
        if (upgrade200.classList.contains('hidden')) {examinationUpgrade(upgrade500, 500, 10)}
        else modalWindow(buyPreviousUpgradeSubstrate, buyPreviousUpgradeBack)
        
    })



    asyncUpgrade25.addEventListener('click', () => {
        asyncUpgrade(asyncUpgrade25, 1, 2000, 25)
    })

    asyncUpgrade50.addEventListener('click', () => {
        if (asyncUpgrade25.classList.contains('hidden')) {asyncUpgrade(asyncUpgrade50, 1, 1000, 50 )}
        else {
            notEnoughSubstrateModalShow.classList.add('hidden')
            modalWindow(buyPreviousUpgradeSubstrate, buyPreviousUpgradeBack)

        }

    })

    asyncUpgrade250.addEventListener('click', () => {
        if (asyncUpgrade50.classList.contains('hidden')) {asyncUpgrade(asyncUpgrade250, 2, 1000, 250 )}
        else {
            notEnoughSubstrateModalShow.classList.add('hidden')
            modalWindow(buyPreviousUpgradeSubstrate, buyPreviousUpgradeBack)

        }

    })

    asyncUpgrade1000.addEventListener('click', () => {
        if (asyncUpgrade250.classList.contains('hidden')) {asyncUpgrade(asyncUpgrade1000, 5, 1000, 1000 )}
        else {
            notEnoughSubstrateModalShow.classList.add('hidden')
            modalWindow(buyPreviousUpgradeSubstrate, buyPreviousUpgradeBack)

        }

    })

    asyncUpgrade5000.addEventListener('click', () => {
        if (asyncUpgrade1000.classList.contains('hidden')) {asyncUpgrade(asyncUpgrade5000, 10, 1500, 5000 )}
        else {
            notEnoughSubstrateModalShow.classList.add('hidden')
            modalWindow(buyPreviousUpgradeSubstrate, buyPreviousUpgradeBack)

        }

    })

    asyncUpgrade25000.addEventListener('click', () => {
        if (asyncUpgrade5000.classList.contains('hidden')) {asyncUpgrade(asyncUpgrade25000, 20, 1000, 25000 )}
        else {
            notEnoughSubstrateModalShow.classList.add('hidden')
            modalWindow(buyPreviousUpgradeSubstrate, buyPreviousUpgradeBack)

        }

    })

    badEvent(badEventInterval)

    doubleClicksEvent(300_000)

    // Admin Menu
    upgrades.addEventListener('click', () => {
        modalWindow(upgradesSubstrate, upgradesBack)
    })

    design.addEventListener('click', e => {
        modalWindow(designSubstrate, designBack)
        if (e.key == 'Enter') {
            design.blur()
        }
        userColor.value = ''
        wrongColor.classList.add('hidden')
        userColor.classList.remove('red_border')
        wrongFormat.classList.add('hidden')
    })

    statistics.addEventListener('click', () => {
        modalWindow(statisticsSubstrate, statisticsBack)
    })

    settings.addEventListener('click', () => {
        e.preventDefault()

        modalWindow(settingsSubstrate, settingsBack)
    })

    achievements.addEventListener('click', () => {
        modalWindow(achievementaSubstrate, achievementsBack)
    })
// Modal Window



    // Design
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

            wrongColor.classList.add('hidden')
            userColor.classList.remove('red_border')
        }
        if (userColor.value.match(/#[a-f0-9]{6}\b|#[a-f0-9]{3}\b|rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$|rgba\((\s*\d+\s*,){3}[\d\.]+\)/gi) === null) {
            userColor.classList.add('red_border')
            wrongColor.classList.remove('hidden')
        }
        userColor.value = ''

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

    userColorButton.addEventListener('click', () => {
    })

    userColor.addEventListener('input', () => {
    
        if (userColor.value[0] != '#') {

            wrongFormat.classList.remove('hidden')
            wrongColor.classList.add('hidden')
            userColor.classList.add('red_border')

        } else {
            wrongFormat.classList.add('hidden')
            wrongColor.classList.add('hidden')
            userColor.classList.remove('red_border')
        }
        if (userColor.value == '') {

            wrongFormat.classList.add('hidden')
            wrongColor.classList.add('hidden')
            userColor.classList.remove('red_border')
        }
    })

    // Promo
    promoButton.addEventListener('click', e => {
        e.preventDefault()

        if (promo.value === promocode) {
            if (promoValue.includes(promocode)) {
                settingsSubstrate.classList.add('hidden')
                modalWindow(repitionPromoSubstrate, repitionPromoBack)
            } else {
                promoValue.push(promo.value)
                count += 50;
                counter.textContent = count
                settingsSubstrate.classList.add('hidden')
                modalWindow(correctPromoSubstrate, correctPromoBack)
            }

        } else if (promo.value != promocode) {
            settingsSubstrate.classList.add('hidden')
            modalWindow(wrongPromoSubstrate, wrongPromoBack)
        }
        promo.value = ''
    })

    //   This is BAD
 const achievementsFunction = item => {
    if (count >= 200) {
        if (!item.classList.contains('opacity')) {
            item.classList.add('border-green')
        }
    }
 }
 achievementItem.addEventListener('click', () => {
    if (achievementItem.classList.contains('border-green')) {
        count += 100
        counter.textContent = count
        achievementItem.classList.remove('border-green')
        achievementItem.classList.add('opacity')
    }
 })


// Click

    click.addEventListener('click', () => {
        count++
        count += upgrade
        counter.textContent = count


        allClicks++
        allClicksSubheader.textContent = `Всего кликов: ${allClicks}`

        achievementProgress.textContent = `${count}/200`
        achievementsFunction(achievementItem)
    })

})