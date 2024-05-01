import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import BuildingFooter from "./BuildingFooter";
import StJosephFooter from "./StJosephFooter";
import GateIcon from "../Images/gate.png";
import "../Styles/Map.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

let mapOptions = {
  zoomControl: false,
  scrollwheel: true,
  draggable: true,
  // restriction: {
  //   latLngBounds: bounds,
  //   strictBounds: true,
  // },
  // Add styles property to disable default pinpoints
  disableDefaultUI: true,
  minZoom: 18.3,
  // Set minimum zoom level
  maxZoom: 25,
  styles: [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
  ],
};

let buildings = [
  {
    name: "St. Francis Building",
    lat: 14.624121463200886,
    lng: 121.02527334369373,
    id: 1,
  },
  {
    name: "Mater Dei Auditorium",
    lat: 14.623902499853319,
    lng: 121.02526346875281,
    id: 2,
  },
  {
    name: "St. Bonaventure Building",
    lat: 14.623702873007964,
    lng: 121.02499892557847,
    id: 3,
  },
  {
    name: "T. Van Miert Building",
    lat: 14.623627207947257,
    lng: 121.02444654610676,
    id: 4,
  },
  {
    name: "W. Schutten Building",
    lat: 14.623469438164365,
    lng: 121.02472107205004,
    id: 5,
  },
  {
    name: "SJQC Covered Court",
    lat: 14.623385883407874,
    lng: 121.02444305363899,
    id: 6,
  },
  {
    name: "W. Aben Building",
    lat: 14.623126749478807,
    lng: 121.02424948861861,
    id: 7,
  },
  {
    name: "St. Claire Building",
    lat: 14.623526995805086,
    lng: 121.02533663461647,
    id: 8,
  },
  {
    name: "Jurgen's Hall Dorm",
    lat: 14.623165234734188,
    lng: 121.02488586676368,
    id: 9,
  },
  {
    name: "M. Verhuizen Building",
    lat: 14.622644400368177,
    lng: 121.024504039878,
    id: 10,
  },
  {
    name: "C. Tummers Building",
    lat: 14.622770119120238,
    lng: 121.02468434701913,
    id: 11,
  },
  { name: "Chapel", lat: 14.622643690090433, lng: 121.02500113635803, id: 12 },
  {
    name: "St. Anthony Building",
    lat: 14.622763978425388,
    lng: 121.02552761343165,
    id: 13,
  },
  {
    name: "Special Education Building",
    lat: 14.622397580213189,
    lng: 121.02563298961451,
    id: 14,
  },
  {
    name: "Administration Building",
    lat: 14.62253034452674,
    lng: 121.02516740583367,
    id: 15,
  },
  {
    name: "Open Field",
    lat: 14.622320156814393,
    lng: 121.02521805155895,
    id: 16,
  },
  // ...add more coordinates...
];

let gates = [
  {
    name: "Gate 1",
    lat: 14.622059929830435,
    lng: 121.02493990625133,
  },
  {
    name: "Gate 3",
    lat: 14.622211601005457,
    lng: 121.02549070123871,
  },
  {
    name: "Gate 4",
    lat: 14.622560531104186,
    lng: 121.0244912112445,
  },
  {
    name: "Gate 5",
    lat: 14.623819154162177,
    lng: 121.02471198043676,
  },
];

function Map({ isOpen, savedMapData, isFooterOpen, onToggleFooter }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBJpEq4WvAtBRyy9dz8wn-rr_pj-6_xPWU",
    libraries,
  });

  const initialCenter = {
    lat: 14.623,
    lng: 121.025,
  };

  const [zoom, setZoom] = useState(19.2);
  const [center, setCenter] = useState(initialCenter);
  // const [isFooterOpen, setIsFooterOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isBuildingClicked, setIsBuildingClicked] = useState(false);
  const [isSearchSuggestionClicked, setIsSearchSuggestionClicked] =
    useState(false);
  const [isMapClicked, setIsMapClicked] = useState(false);
  const [tempBuildingId, setTempBuildingId] = useState();
  const [isBuildingRouteOpen, setIsBuildingRouteOpen] = useState(false);

  useEffect(() => {
    console.log(tempBuildingId);
    if (savedMapData) {
      const savedBuilding = buildings.find((b) => b.id === savedMapData);
      if (savedBuilding) {
        setZoom(22);
        setCenter({
          lat: savedBuilding.lat,
          lng: savedBuilding.lng,
          name: savedBuilding.name,
        });
        setIsBuildingClicked(true);
        setTempBuildingId(savedMapData);
        setIsBuildingRouteOpen(true);
      }
    }
  }, [savedMapData]);

  const handleMarkerClick = (markerPosition) => {
    if (markerPosition) setZoom((prevZoom) => (prevZoom < 22 ? 22 : 19.2));
    setTempBuildingId(markerPosition.id);
    console.log(tempBuildingId);
    setCenter(markerPosition);
    setIsBuildingRouteOpen(true);

    // setIsFooterOpen(true);
  };

  function handleSearchSubmit(searchTerm) {
    setZoom(22);
    setSearchValue(searchTerm.name);
    setCenter(searchTerm);
    // setIsFooterOpen(true);

    setTempBuildingId(searchTerm.id);
    setIsBuildingRouteOpen(true);
    setIsBuildingClicked(true);
    const savedSearches =
      JSON.parse(localStorage.getItem("savedSearches")) || [];

    // Check if the searchTerm already exists in savedSearches
    const isDuplicate = savedSearches.some(
      (savedSearch) => savedSearch.name === searchTerm.name
    );

    // If it's not a duplicate, add it to the saved searches
    if (!isDuplicate) {
      const updatedSearches = [...savedSearches, searchTerm];
      localStorage.setItem("savedSearches", JSON.stringify(updatedSearches));
    }
  }

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <>
      <div
        className="search-container"
        style={{ transform: isOpen && "translateX(20rem)" }}
      >
        <div className="search-container-inner">
          <input
            type="text"
            className="search-input"
            placeholder="Search here..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setIsSearchSuggestionClicked(false);

              setIsMapClicked(false);
            }}
          />
          <div className="search-icon"></div>
        </div>
      </div>
      <div
        className={`map-with-routes ${isMapClicked ? "--route-open" : ""} ${
          isBuildingClicked ? "--building-clicked" : ""
        } ${isBuildingClicked && isMapClicked && "--building-map-clicked"} `}
        // style={{ bottom: isBuildingClicked && isMapClicked && "20rem" }}
        onClick={() => {
          setIsMapClicked(!isMapClicked);
        }}
      ></div>

      <div
        className={`${
          isBuildingRouteOpen &&
          tempBuildingId &&
          "map-with-routes  --route-open"
        } ${tempBuildingId === 1 && "francis-route"} ${
          tempBuildingId === 2 && "mda-route"
        } ${tempBuildingId === 3 && "bona-route"} ${
          tempBuildingId === 4 && "miert-route"
        } ${tempBuildingId === 5 && "schutter-route"} ${
          tempBuildingId === 6 && "court-route"
        } ${tempBuildingId === 7 && "aben-route"} ${
          tempBuildingId === 8 && "claire-route"
        } ${tempBuildingId === 9 && "jurgens-route"} ${
          tempBuildingId === 10 && "ver-route"
        } ${tempBuildingId === 11 && "tummers-route"} ${
          tempBuildingId === 12 && "chapel-route"
        } ${tempBuildingId === 13 && "anthony-route"} ${
          tempBuildingId === 14 && "sped-route"
        } ${tempBuildingId === 15 && "admin-route"} ${
          tempBuildingId === 16 && "open-field-route"
        } `}
        onClick={() => {
          setIsBuildingRouteOpen(!isBuildingRouteOpen);
        }}
        style={{ zIndex: "8", top: "calc(50% - 3rem)" }}
      ></div>

      {searchValue && !isSearchSuggestionClicked && (
        <div
          className="search-suggestions"
          style={{ transform: isOpen && "translateX(20rem)" }}
        >
          <p>
            Seach suggestions for:{" "}
            <span style={{ fontWeight: 600 }}>{searchValue}</span>
          </p>

          {buildings
            .filter((item) => {
              const searchTerm = searchValue.toLowerCase();
              const fullName = item.name.toLowerCase();
              return searchTerm && fullName.startsWith(searchTerm);
            })
            .map((building, i) => (
              <p
                key={i}
                onClick={() => {
                  handleSearchSubmit(building);
                  setIsSearchSuggestionClicked(true);
                }}
                style={{ cursor: "pointer" }}
              >
                {building.name}
              </p>
            ))}
        </div>
      )}
      <div className="map">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={zoom}
          center={center}
          options={mapOptions}
        >
          {buildings.map((building, i) => (
            <MarkerF
              key={i}
              position={building}
              onClick={() => {
                handleMarkerClick(building);
                setIsBuildingClicked(true);
              }}
            ></MarkerF>
          ))}
          {gates.map((gate, i) => (
            <MarkerF
              key={i}
              position={gate}
              icon={GateIcon}
              onClick={() => {
                handleMarkerClick(gate);
              }}
            ></MarkerF>
          ))}
        </GoogleMap>
        {isBuildingClicked && (
          <BuildingFooter
            isFooterOpen={isFooterOpen}
            onToggleFooter={onToggleFooter}
            buildingId={center.id}
            lati={center.lat}
            long={center.lng}
            savedMapData={savedMapData}
          >
            {center.name}
          </BuildingFooter>
        )}

        {!isBuildingClicked && (
          <StJosephFooter
            isFooterOpen={isFooterOpen}
            onToggleFooter={onToggleFooter}
            savedMapData={savedMapData}
          />
        )}
      </div>
      {(isMapClicked || isFooterOpen) && (
        <div className="overlay" style={{ zIndex: "3" }}></div>
      )}
      {isBuildingRouteOpen && tempBuildingId && (
        <div
          className="overlay"
          style={{ zIndex: isBuildingRouteOpen && tempBuildingId && "6" }}
        ></div>
      )}
    </>
  );
}

export default Map;
