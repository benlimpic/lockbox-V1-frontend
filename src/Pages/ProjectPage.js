import { useState, useEffect, useCallback } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Project from '../components/Project'
import Container from 'react-bootstrap/Container'

import MAC from "../components/Functions/PageSort/MAC";
import smallFilter from "../components/Functions/Matrix/smallFilter";
import smallMatrix from "../components/Functions/Matrix/smallMatrix";
import PageOptions from "../components/Functions/PageSort/Show/pageNames";

import largeMatrix from "../components/Functions/Matrix/largeMatrix";
import largeMaster from "../components/Functions/Masters/largeMaster";
import objectifyBlank from "../components/Functions/Objectify/objectifyBlank";
import keyNamer from "../components/Functions/Namers/keyNamer";
import masterKeyNamer from "../components/Functions/Namers/masterKeyNamer";
import isUsable from "../components/Functions/PageSort/isUsable";

async function getProject(id) {
  const response = await axios.get(`http://localhost:3000/api/v1/projects/${id}`)
  return response
}

const ProjectPage = () => {
  const [pageNames, setPageNames] = useState([] || "");
  const [data, setData] = useState("");
  const [tmk, setTmk] = useState("");
  const [sop, setSop] = useState("");
  const [mac, setMac] = useState("");
  const [max, setMax] = useState("");
  const [joinTmk, setJoinTmk] = useState("");
  const [joinSop, setJoinSop] = useState("");
  const [smMatrix, setSmMatrix] = useState([] || "");
  const [smFilter, setSmFilter] = useState("");



  const { id } = useParams()

  
  const getAllBlanks = useCallback(async () => {
    const  cloneLargeMaster = largeMaster(smallFilter(smallMatrix(tmk)), sop, tmk);
    const  cloneKeyNamer = masterKeyNamer(cloneLargeMaster);
    const  cloneLargeMatrix = largeMatrix(smallFilter(smallMatrix(tmk)), sop);
    const  cloneMatrixNamer = keyNamer(cloneLargeMatrix);

    let masterData = {
      B: objectifyBlank(
        cloneLargeMaster[0],
        cloneKeyNamer[0],
        max,
        isUsable(cloneLargeMaster[0], mac),
        id
      ),
      X: objectifyBlank(
        cloneLargeMaster[1],
        cloneKeyNamer[1],
        max,
        isUsable(cloneLargeMaster[1], mac),
        id
      ),
      Y: objectifyBlank(
        cloneLargeMaster[2],
        cloneKeyNamer[2],
        max,
        isUsable(cloneLargeMaster[2], mac),
        id
      ),
      P: objectifyBlank(
        cloneLargeMaster[3],
        cloneKeyNamer[3],
        max,
        isUsable(cloneLargeMaster[3], mac),
        id
      ),
      F: objectifyBlank(
        cloneLargeMaster[4],
        cloneKeyNamer[4],
        max,
        isUsable(cloneLargeMaster[4], mac),
        id
      ),
      S: objectifyBlank(
        cloneLargeMaster[5],
        cloneKeyNamer[5],
        max,
        isUsable(cloneLargeMaster[5], mac),
        id
      ),
    };

    
    let matrixData = {
      keys: objectifyBlank(
        cloneLargeMatrix,
        cloneMatrixNamer,
        max,
        isUsable(cloneLargeMatrix, mac),
        id
        ),
      };

      // console.log("MATRIX", matrixData.keys);
      // console.log("MASTER", masterData);

      return { masterData, matrixData };

  }, [id, max, mac, sop, tmk]);
  


  useEffect(() => {
    getProject(id).then((response) => {
      const data = response.data

      let TMK = JSON.parse(data.tmk);
      let SOP = JSON.parse(data.sop);
      let MAX = MAC(data.mac);
      let TMKJoin = TMK.join("");
      let SOPJoin = SOP.join("");

      setData(data);
      setTmk(TMK);
      setJoinTmk(TMKJoin);
      setSop(SOP);
      setJoinSop(SOPJoin);
      setMac(data.mac);
      setMax(MAX);
      setSmMatrix(smallMatrix(TMK));
      setSmFilter(smallFilter(smallMatrix(TMK)));
      setPageNames(PageOptions(SOP));
    });
  }, []);

  useEffect(() => {
    getAllBlanks()
  }, [id]);


  return (
    <>
      <Project 
        projectId={id}
        data={data}
        tmk={tmk}
        sop={sop}
        mac={mac}
        max={max}
        joinTmk={joinTmk}
        joinSop={joinSop}
        smMatrix={smMatrix}
        smFilter={smFilter}
        pageNames={pageNames}
        getAllBlanks={getAllBlanks}
      />
    </>
  )
}

export default ProjectPage