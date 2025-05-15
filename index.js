// Sidebar interaction: highlight active menu item
document.querySelector('.left .sidebar').addEventListener('click', e => {
  const menuItem = e.target.closest('.menu-item');
  if (!menuItem) return; // klik di luar menu-item, abaikan

  // Hapus kelas 'active' dari semua menu item
  document.querySelectorAll('.left .sidebar .menu-item.active').forEach(item => {
    item.classList.remove('active');
  });

  // Tambah kelas 'active' ke menu item yang diklik
  menuItem.classList.add('active');

// PESAN
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const messageItems = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// Fungsi toggle tampilkan popup pesan saat notif diklik
messageNotification.addEventListener('click', () => {
  messages.classList.toggle('show'); // asumsikan ada css .show untuk tampilkan .messages
  messageNotification.querySelector('.notification-count')?.remove(); // hilangkan badge notif kalau ada
});

// Fungsi filter pesan berdasarkan search input
messageSearch.addEventListener('input', () => {
  const val = messageSearch.value.toLowerCase();

  messageItems.forEach(msg => {
    const username = msg.querySelector('h5, .name')?.textContent.toLowerCase() || '';
    const text = msg.querySelector('p')?.textContent.toLowerCase() || '';

    if (username.includes(val) || text.includes(val)) {
      msg.style.display = 'flex'; // tampilkan pesan yang cocok
    } else {
      msg.style.display = 'none'; // sembunyikan yang gak cocok
    ),

//Theme
const themeBtn = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizeOptions = document.querySelectorAll('.choose-size span');
const root = document.documentElement; // :root
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// Buka modal tema
themeBtn.addEventListener('click', () => {
  themeModal.style.display = 'grid';
});

// Tutup modal klik di luar card
themeModal.addEventListener('click', (e) => {
  if (e.target === themeModal) {
    themeModal.style.display = 'none';
  }
});

// Fungsi hapus active di font size
function removeFontSizeActive() {
  fontSizeOptions.forEach(size => size.classList.remove('active'));
}

// Set font size dan update active class
fontSizeOptions.forEach(size => {
  size.addEventListener('click', () => {
    removeFontSizeActive();
    size.classList.add('active');

    let fontSizeValue;
    switch(size.dataset.size) {
      case 'small':
        fontSizeValue = '12px';
        break;
      case 'medium':
        fontSizeValue = '16px';
        break;
      case 'large':
        fontSizeValue = '20px';
        break;
      default:
        fontSizeValue = '16px';
    }
    root.style.fontSize = fontSizeValue;
  });
});

// Fungsi hapus active di warna tema
function removeColorActive() {
  colorPalette.forEach(color => color.classList.remove('active'));
}

// Ganti warna tema dan active class
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    removeColorActive();
    color.classList.add('active');
    const primaryHue = color.dataset.hue;
    root.style.setProperty('--color-primary-hue', primaryHue);
  });
});

// Ganti background tema
function resetBgActive() {
  [Bg1, Bg2, Bg3].forEach(bg => bg.classList.remove('active'));
}

Bg1.addEventListener('click', () => {
  resetBgActive();
  Bg1.classList.add('active');
  root.style.setProperty('--light-color-lightness', '95%');
  root.style.setProperty('--white-color-lightness', '100%');
  root.style.setProperty('--dark-color-lightness', '17%');
});

Bg2.addEventListener('click', () => {
  resetBgActive();
  Bg2.classList.add('active');
  root.style.setProperty('--light-color-lightness', '15%');
  root.style.setProperty('--white-color-lightness', '20%');
  root.style.setProperty('--dark-color-lightness', '95%');
});

Bg3.addEventListener('click', () => {
  resetBgActive();
  Bg3.classList.add('active');
  root.style.setProperty('--light-color-lightness', '0%');
  root.style.setProperty('--white-color-lightness', '10%');
  root.style.setProperty('--dark-color-lightness', '95%');


// ============== SIDEBAR ============== 

// Fungsi untuk hapus kelas active dari semua menu item
const changeActiveItem = () => {
  menuItems.forEach(item => item.classList.remove('active'));
};

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');

    const notificationsPopup = document.querySelector('.notifications-popup');
    const notificationCount = document.querySelector('#notifications .notification-count');

    if (item.id !== 'notifications') {
      notificationsPopup.style.display = 'none';
    } else {
      notificationsPopup.style.display = 'block';
      if (notificationCount) notificationCount.style.display = 'none';
    }
  })
})

// ============== MESSAGES ============== 

// Fungsi pencarian pesan
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();

  message.forEach(user => {
    const name = user.querySelector('h5').textContent.toLowerCase();
    user.style.display = name.includes(val) ? 'flex' : 'none';
        }
    })
}

//Search for messages
messageSearch.addEventListener('keyup', searchMessage);

//Highlight messages card when messages menu item is clicked
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// ----------FRIENDSHIP---------

//Tambahkan Interaksi JavaScript
 function checkRequests() {
    const container = document.querySelector('.friend-requests');
    if (container.querySelectorAll('.request').length === 0) {
      container.innerHTML += `<p class="text-muted">No more friend requests.</p>`;
    }
  }

  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(checkRequests, 500);
    })
  })

//share button
 document.querySelectorAll('.uil-share-alt').forEach(icon => {
    icon.addEventListener('click', () => {
      alert("Link copied to clipboard! 🔗");
    })
  })

//bookmar toggle
 document.querySelectorAll('.uil-bookmark-full').forEach(icon => {
    icon.addEventListener('click', () => {
      icon.classList.toggle('bookmarked');
    })
  })

//Tambahkan Status Kosong Kalau Sudah Tidak Ada Request
 function checkRequests() {
    const container = document.querySelector('.friend-requests');
    if (container.querySelectorAll('.request').length === 0) {
      container.innerHTML += `<p class="text-muted">No more friend requests.</p>`;
    }
  }

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(checkRequests, 500);
    })
  })

// -------------- COMMENT BOX ---------------

//comment
  document.querySelectorAll('.uil-comment-dots').forEach(icon => {
    icon.addEventListener('click', () => {
      const feed = icon.closest('.feed');
      let commentBox = feed.querySelector('.comment-box');
      if (!commentBox) {
        commentBox = document.createElement('div');
        commentBox.className = 'comment-box';
        commentBox.innerHTML = `
          <input type="text" placeholder="Write a comment..." />
          <button>Post</button>
        `;
        feed.appendChild(commentBox);
      }
    })
  })

// ============== THEME / DISPLAY CUSTOMIZATION ============== 

// Opens Modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// Closes Modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);


// ============== FONT SIZE ============== 

// remove active class from spans or font size selectors
const removeSizeSelectors = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

fontSize.forEach(size => { 
   size.addEventListener('click', () => {
        removeSizeSelectors();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')) { 
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')) { 
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
   })
})

// Remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// Change color primary
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass(); 

        if(color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if(color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if(color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if(color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if(color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

  
//Theme Background Values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    // add active class
    Bg1.classList.add('active');
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customized changes from local storage
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});
