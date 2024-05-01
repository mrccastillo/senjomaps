import React from "react";

function Building({ tempBuildingId, child }) {
  return (
    <>
      <div className="building-images">
        {(() => {
          switch (true) {
            case tempBuildingId === 1:
              return (
                <>
                  <div className="francis1"></div>;
                </>
              );
            case tempBuildingId === 2:
              return (
                <>
                  <iframe
                    src="https://momento360.com/e/u/ffeddde8813c4ed68e623f0406f82257?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                    title="Openfield"
                    className="panorama"
                    allowfullscreen="true"
                  ></iframe>
                  <div className="mda1"></div>
                  <div className="mda2"></div>
                  <div className="mda3"></div>
                  <div className="mda4"></div>
                  <div className="mda5"></div>
                  <div className="mda6"></div>
                  <div className="mda7"></div>
                  <div className="mda8"></div>
                  <div className="mda9"></div>
                </>
              );
            case tempBuildingId === 3:
              return (
                <>
                  <iframe
                    src="https://momento360.com/e/u/7b00411bdb4d47b995d276ce6c61031d?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                    title="Openfield"
                    className="panorama"
                    allowfullscreen="true"
                  ></iframe>
                  <div className="bona1"></div>
                  <div className="bona2"></div>
                  <div className="bona3"></div>
                  <div className="bona4"></div>
                  <div className="bona5"></div>
                  <div className="bona6"></div>
                </>
              );
            case tempBuildingId === 4:
              return (
                <>
                  <iframe
                    src="https://momento360.com/e/u/242f81a1ca4843fc9b3763ca4108b278?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                    title="Openfield"
                    className="panorama"
                    allowfullscreen="true"
                  ></iframe>
                  <div className="miert1"></div>
                  <div className="miert2"></div>
                  <div className="miert3"></div>
                </>
              );
            case tempBuildingId === 5:
              return (
                <>
                  <iframe
                    src=" https://momento360.com/e/u/fef5967355cf404ca7ee4c4871678dd9?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                    title="Openfield"
                    className="panorama"
                    allowfullscreen="true"
                  ></iframe>

                  <div className="schutten1"></div>
                  <div className="schutten2"></div>
                  <div className="schutten3"></div>
                  <div className="schutten4"></div>
                  <div className="schutten5"></div>
                  <div className="schutten6"></div>
                  <div className="schutten7"></div>
                  <div className="schutten8"></div>
                  <div className="schutten9"></div>
                  <div className="schutten10"></div>
                  <div className="schutten11"></div>
                  <div className="schutten12"></div>
                </>
              );
            case tempBuildingId === 6:
              return (
                <>
                  <iframe
                    allowfullscreen="true"
                    src=" https://momento360.com/e/u/7d4ec0c754df4d1995cab27db207d023?utm_campaign=embed&utm_source=other&heading=-173.67&pitch=-16.77&field-of-view=100&size=medium"
                    title="Openfield"
                    className="panorama"
                  ></iframe>
                  <div className="court1"></div>
                  <div className="court2"></div>
                  <div className="court3"></div>
                </>
              );
            case tempBuildingId === 7:
              return (
                <>
                  {/* <PanoAben /> */}
                  <iframe
                    className="panorama"
                    allowfullscreen="true"
                    src="https://momento360.com/e/u/2f111b7aef7d4517881aa35a3e8b639f?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                  ></iframe>
                  <div className="aben1"></div>
                  <div className="aben2"></div>
                  <div className="aben3"></div>
                  <div className="aben4"></div>
                  <div className="aben5"></div>
                  <div className="aben6"></div>
                  <div className="aben7"></div>
                  <div className="aben8"></div>
                  <div className="aben9"></div>
                  <div className="aben10"></div>
                  <div className="aben11"></div>
                </>
              );
            case tempBuildingId === 8:
              return (
                <>
                  <iframe
                    className="panorama"
                    height="275px"
                    width="500px"
                    allowfullscreen="true"
                    src="https://momento360.com/e/u/be74ca624f04425aadae28ab955396bb?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                  ></iframe>

                  <div className="claire1"></div>
                  <div className="claire2"></div>
                  <div className="claire3"></div>
                  <div className="claire4"></div>
                  <div className="claire5"></div>
                  <div className="claire6"></div>
                  <div className="claire7"></div>
                  <div className="claire8"></div>
                  <div className="claire9"></div>
                  <div className="claire10"></div>
                  <div className="claire11"></div>
                  <div className="claire12"></div>
                  <div className="claire13"></div>
                  <div className="claire14"></div>
                  <div className="claire15"></div>
                  <div className="claire16"></div>
                </>
              );
            case tempBuildingId === 9:
              return (
                <>
                  <iframe
                    src="https://momento360.com/e/u/ecb50f46e75449daabc8ad5f8ec179d2?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                    title="Openfield"
                    className="panorama"
                    allowfullscreen="true"
                  ></iframe>
                  <div className="jurgen1"></div>
                  <div className="jurgen2"></div>
                  <div className="jurgen3"></div>
                </>
              );
            case tempBuildingId === 10:
              return (
                <>
                  <iframe
                    src="https://momento360.com/e/u/e562de8f895f419198b1acd7daabfdbe?utm_campaign=embed&utm_source=other&heading=-153.1&pitch=11.02&field-of-view=75&size=medium"
                    title="Openfield"
                    allowfullscreen="true"
                    className="panorama"
                  ></iframe>
                  <div className="ver1"></div>
                  <div className="ver2"></div>
                  <div className="ver3"></div>
                  <div className="ver4"></div>
                  <div className="ver5"></div>
                  <div className="ver6"></div>
                </>
              );
            case tempBuildingId === 11:
              return (
                <>
                  <iframe
                    src="https://momento360.com/e/u/6b994aa18f514242b12cb6ee94396b59?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                    title="Openfield"
                    className="panorama"
                    allowfullscreen="true"
                  ></iframe>
                  <div className="tummers1"></div>
                  <div className="tummers2"></div>
                  <div className="tummers3"></div>
                  <div className="tummers4"></div>
                  <div className="tummers5"></div>
                  <div className="tummers6"></div>
                  <div className="tummers7"></div>
                </>
              );
            case tempBuildingId === 12:
              return (
                <>
                  <iframe
                    src="https://momento360.com/e/u/22cde6ce4a884962a5562b5bcf8625b0?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                    title="Openfield"
                    className="panorama"
                    allowfullscreen="true"
                  ></iframe>
                  <div className="chapel1"></div>
                  <div className="chapel2"></div>
                  <div className="chapel3"></div>
                  <div className="chapel4"></div>
                </>
              );
            case tempBuildingId === 13:
              return (
                <>
                  <iframe
                    src="https://momento360.com/e/u/4bffb539a08a4121901be90fc671ad7f?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                    title="Openfield"
                    allowfullscreen="true"
                    className="panorama"
                  ></iframe>
                  <div className="ant1"></div>
                  <div className="ant2"></div>
                  <div className="ant3"></div>
                  <div className="ant4"></div>
                  <div className="ant5"></div>
                </>
              );
            case tempBuildingId === 14:
              return (
                <>
                  <iframe
                    src="https://momento360.com/e/u/567c904b13f34f50b0671998a75fe939?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                    title="Openfield"
                    className="panorama"
                    allowfullscreen="true"
                  ></iframe>
                  <div className="sped1"></div>
                  <div className="sped2"></div>
                  <div className="sped3"></div>
                  <div className="sped4"></div>
                  <div className="sped5"></div>
                  <div className="sped6"></div>
                </>
              );
            case tempBuildingId === 15:
              return (
                <>
                  <iframe
                    src="https://momento360.com/e/u/dae3982ba1a9479a9af7e4c4e27de71e?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                    title="Openfield"
                    className="panorama"
                    allowfullscreen="true"
                  ></iframe>
                  <div className="admin1"></div>
                  <div className="admin2"></div>
                </>
              );

            case tempBuildingId === 16:
              return (
                <>
                  <iframe
                    src="https://momento360.com/e/u/dd02c189358346b2b5002b3904f5c3ce?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                    title="Openfield"
                    className="panorama"
                    allowfullscreen="true"
                  ></iframe>
                  <div className="openfield1"></div>
                  <div className="openfield2"></div>
                </>
              );
            default:
              return null;
          }
        })()}
      </div>
      <div className="building-rooms-info">
        {(() => {
          switch (true) {
            case tempBuildingId === 1:
              return (
                <>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 2:
              return (
                <>
                  <div className="building-rooms">
                    <div className="room mda-room"></div>
                  </div>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 3:
              return (
                <>
                  <div className="building-rooms">
                    <div className="room bona-room"></div>
                  </div>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 4:
              return (
                <>
                  <div className="building-rooms">
                    <div className="room miert-room"></div>
                  </div>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 5:
              return (
                <>
                  <div className="building-rooms">
                    <div className="room schutten-room"></div>
                  </div>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 6:
              return (
                <>
                  <div className="building-rooms">
                    <div className="room court-room"></div>
                  </div>
                </>
              );
            case tempBuildingId === 7:
              return (
                <>
                  <div className="building-rooms">
                    <div className="room aben-room"></div>
                  </div>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 8:
              return (
                <>
                  <div className="building-rooms">
                    <div className="room claire-room1"></div>
                    <div className="room claire-room2"></div>
                  </div>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 9:
              return (
                <>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 10:
              return (
                <>
                  <div className="building-rooms">
                    <div className="room ver-room"></div>
                  </div>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 11:
              return (
                <>
                  <div className="building-rooms">
                    <div className="room tummers-room"></div>
                  </div>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 12:
              return (
                <>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 13:
              return (
                <>
                  <div className="building-rooms">
                    <div className="room anthony-room"></div>
                  </div>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 14:
              return (
                <>
                  <div className="building-rooms">
                    <div className="room sped-room"></div>
                  </div>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 15:
              return (
                <>
                  <div className="building-rooms">
                    <div className="room admin-room"></div>
                  </div>
                  <div className="building-sign"></div>
                </>
              );
            case tempBuildingId === 16:
              return (
                <>
                  <div className="building-rooms">
                    <div className="room openfield-room"></div>
                  </div>
                </>
              );
          }
        })()}
      </div>
    </>
  );
}

export default Building;
