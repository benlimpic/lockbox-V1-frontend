import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import KeyModal from "../../../Display/Create/Create/KeyCreate/keyModal";
import ShowKeyModal from "../../../Display/Create/Show/KeyShow/KeyModal";

async function getKeys(projectId) {
  const response = await axios.get(
    `http://localhost:3000/api/v1/projects/${projectId}/keys/`
  );
  return response.data;
}

const HoverComponent = (props) => {
  const {
    projectId,
    keyClick,
    setKeyClick,
    pageMatrix,
    pageMat,
    usedKeys,
    setKeys,
    setKeysInUse,
  } = props;

  const [hover, setHover] = useState(pageMat);
  const [showModal, setShowModal] = useState(false);
  const [showShowModal, setShowShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [verified, setVerified] = useState(false);
  const [kingKey, setKingKey] = useState({});
  const [style, setStyle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [propStatus, setPropStatus] = useState([]);

  const styleInUse = {
    // color: "rgb(255, 221, 0)",
    textAlign: "center",
  };
  const styleReserved = {
    // color: "rgb(0, 26, 255)",
    textAlign: "center",
  };
  const styleArchived = {
    // color: "rgb(255, 42, 0)",
    textAlign: "center",
  };
  const styleUsable = {
    // color: "green",
    textAlign: "center",
  };
  const styleUnusable = {
    color: "rgb(144, 141, 141)",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "red",
    textAlign: "center",
  };

  const handleShow = useCallback(() => setShowModal(!showModal), [showModal]);

  const handleShowShow = useCallback(
    () => setShowShowModal(!showShowModal),
    [showShowModal]
  );

  const handleShowSecond = useCallback(
    () => setShowSecondModal(!showSecondModal),
    [showSecondModal]
  );

  useEffect(() => {
    getKeys(projectId)
      .then((data) => {
        setKeys(data);
        let filterKey = [];
        data.filter((key) => {
          if (key.inUse === true) {
            filterKey.push(key);
          }
        });
        setKeysInUse(filterKey);
        filterKey = [];

        let entries = Object.entries(data);
        entries.filter((entry) => {
          if (entry[1].cut === pageMat[3]) {
            setKingKey(entry[1]);
            setVerified(true);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageMat, setKeysInUse, handleShowShow, handleShowSecond, projectId]);

  useEffect(() => {
    let kingsKeys = {};
    setVerified(false);
    let entries = Object.entries(usedKeys);
    entries.forEach((entry) => {
      if (entry[1].cut === pageMat[3]) {
        kingsKeys = entry[1];
        setVerified(true);
      }
    });
    setKingKey(kingsKeys);
    setHover(pageMat[3]);
    setLoading(false);
  }, [pageMat, usedKeys]);

  
  useEffect(() => {
    let style = null;
    let propStatus = null;
    if (kingKey.inUse === true) {
      style = styleInUse;
      propStatus = "table-warning";
    } else if (kingKey.reserved === true) {
      style = styleReserved;
      propStatus = "table-primary";
    } else if (kingKey.archived === true) {
      style = styleArchived;
      propStatus = "table-danger";
    } else if (pageMat[5] === true) {
      style = styleUsable;
      propStatus = "table-success";
    } else {
      style = styleUnusable;
      propStatus = "table-light";
    }

    setStyle(style);
    setPropStatus(propStatus);
    setLoading(false);
  }, [kingKey, pageMat]);

  const clickInfoMatrix = (array) => {
    let entries = pageMatrix;
    entries.filter((entry) => {
      if (entry[3] === array) {
        if (entry[5] === true) {
          if (verified === true) {
            setKeyClick(kingKey);
            handleShowShow();
          } else {
            setKeyClick(pageMat);
            handleShow();
          }
        }
      }
    });
  };


  return (
    <>
      {loading ? (
        <tr>
          <br />
        </tr>
      ) : (
        <tr className={propStatus}
            style={style}
            onClick={(e) => clickInfoMatrix(pageMat[3])}
            onMouseEnter={(e) => setHover(`${pageMat[1]}`)}
            onMouseOut={(e) => setHover(pageMat[3])}
            >
          <td>
            {pageMat[1]}
          </td>
          <td>
            {pageMat[3]}
          </td>
        </tr>
      )}

      {/*//!Send down pageMat details for keyclick to populate form attributes */}

      <KeyModal
        projectId={projectId}
        showModal={showModal}
        handleShow={handleShow}
        handleShowSecond={handleShowSecond}
        showSecondModal={showSecondModal}
        keyClick={keyClick}
        setKeys={setKeys}
        keys={usedKeys}
      />

      {/*//# Test details after creating key to see what needs to be passed down to show attributes #// */}

      <ShowKeyModal
        projectId={projectId}
        showKeyModal={showShowModal}
        handleShowKeyModal={handleShowShow}
        keyData={keyClick}
        setKeys={setKeys}
        keys={usedKeys}
      />
    </>
  );
};

export default HoverComponent;
