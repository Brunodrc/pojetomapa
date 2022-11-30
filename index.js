function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      console.log(latitude, longitude)
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: { lat: latitude, lng: longitude },
      })

      const svgMarker = {
        path:
          'M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
        fillColor: 'green',
        fillOpacity: 0.8,
        strokeWeight: 0,
        rotation: 0,
        scale: 1.5,
        anchor: new google.maps.Point(0, 0),
      }
      listMyPlaces()
      map.addListener('click', (e) => {
        /*
                Adicionar marcardor apenas após confirmação do usuário.
                */
        if (e.placeId) {
          
          const place = {
            place_id: e.placeId,
            latitud: toString(e.latLng.lat()),
            longitud: toString(e.latLng.lng())
          }  
          console.log(typeof e.placeId ) // mostra coordenadas do ponto clicado.
          // mostra coordenadas do ponto clicado.
          console.log(typeof e.latLng.lat()) // mostra coordenadas do ponto clicado.
          console.log(typeof e.latLng.lng()) // mostra coordenadas do ponto clicado.
          addMarker(e.latLng, map)
          newPlace(place)
        } else {
          console.log('Não é um estabelecimento!')
        }
        //addMarker(e.latLng, map);
      })
    })
  } else {
    console.log('nope')
  }
}

function addMarker(position, map) {
  new google.maps.Marker({
    position: position,
    map: map,
  })
}

const listMyPlaces = async () => {
  const res = await fetch('http://localhost:3131/auth/signin/listplace')
  const dados = await res.json()
  console.log(dados)

  dados.forEach((element) => {
    const contentPlaces = document.getElementById('places-container')

    const placeElement = createPlaceItem(element)

    contentPlaces.append(placeElement)
  })
}

const createPlaceItem = (element) => {
  const template = document.getElementById('Listplaces')

  const placeElement = document.importNode(template.content, true)

  const place = placeElement.querySelectorAll('span')

  place[0].innerHTML = element.place_id
  place[1].innerHTML = element.latitud
  place[2].innerHTML = element.longitud

  return placeElement
}

const newPlace = async (place) => {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(place),
  }

  const res = await fetch('http://localhost:3131/auth/signin/salveplace', init)
  const dados = await res.json(place)

  const contentPlaces = document.getElementById('places-container')

  const placeElement = createPlaceItem(place)

  contentPlaces.append(placeElement)
}

const createPlaceElement = (element) => {}

window.initMap = initMap
