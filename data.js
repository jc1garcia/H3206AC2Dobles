var APP_DATA = {
  "scenes": [
    {
      "id": "0-h3206door",
      "name": "H3206Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.09515657366079111,
        "pitch": -0.2747434347351998,
        "fov": 1.1964365482158075
      },
      "linkHotspots": [
        {
          "yaw": -0.18244941620498878,
          "pitch": 0.11794064735022225,
          "rotation": 0,
          "target": "1-h3-206-ac-dos-dobles"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.09537890856079301,
          "pitch": -0.2749657696351999,
          "title": "Dalce click a la Flecha&nbsp;",
          "text": "Dale Click a la Flecha&nbsp;"
        }
      ]
    },
    {
      "id": "1-h3-206-ac-dos-dobles",
      "name": "H3 206 AC Dos Dobles",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7282421672883608,
          "pitch": 0.43340383375799973,
          "rotation": 0.7853981633974483,
          "target": "2-h3-206-bao"
        },
        {
          "yaw": -2.3008230858302685,
          "pitch": 0.6123652755084414,
          "rotation": 5.497787143782138,
          "target": "0-h3206door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-h3-206-bao",
      "name": "H3 206 Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8944678449978642,
          "pitch": 0.5776298886394571,
          "rotation": 5.497787143782138,
          "target": "1-h3-206-ac-dos-dobles"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Hotel Via Principal AC Dos Dobles 206",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
