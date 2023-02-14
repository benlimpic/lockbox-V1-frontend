import { useState, useEffect, useCallback } from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import HoverComponent from "./Hover/listMatrixHover.js";
import MasterHover from "./Hover/listMasterHover.js";

const ListTable = (props) => {
  const {
    keyClick,
    setKeyClick,
    setKeys,
    usedKeys,
    projectId,
    setKeysInUse,
    pageName,
    pageMaster,
    pageMatrix,
  } = props;

  const [loading, setLoading] = useState(true);

  const handleLoading = useCallback(() => {
    if (pageMatrix[63] !== undefined) {
      if (pageMatrix[63][3] !== undefined) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }
  }, [pageMatrix]);

  useEffect(() => {
    handleLoading();
  }, [handleLoading, pageMatrix]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Table size="sm" responsive hover bordered condensed>
          <thead>
            <tr className="table-secondary" >
              <th>Designation</th>
              <th>Cut</th>
            </tr>
          </thead>

        <tbody>
          
        
            {/* //@16 PAGE MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[26]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //@ 4 PAGE MASTER */}
            

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[25]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! PAGE MASTER */}

              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[24]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //$ BREAK LINE */}

            
          

        
            {/* //$ BLOCK:1 MASTER */}


              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[0]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
          

        
            {/* //! DATA 1 */}


              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[0]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 2 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[1]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 3 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[2]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 4 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[3]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

            {/* //$ BREAK LINE */}


          
        
            {/* //$ BLOCK:2 MASTER */}


              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[1]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

          

        
            {/* //! DATA 5 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[4]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 6 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[5]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 7 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[6]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 8 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[7]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //$ BREAK LINE */}

          
        
            {/* //$ BLOCK:3 MASTER */}


              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[2]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
          

        
            {/* //! DATA 9 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[8]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 10 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[9]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 11 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[10]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 12 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[11]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //$ BREAK LINE */}

          
        
            {/* //$ BLOCK:4 MASTER */}


              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[3]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

          

        
            {/* //! DATA 13 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[12]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 14 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[13]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

            {/* //! DATA 15 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[14]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 16 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[15]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //$ BREAK LINE */}

          
        
            {/* //$ BLOCK:5 MASTER */}


              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[4]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

          

        
            {/* //! DATA 17 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[16]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 18 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[17]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 19 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[18]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 20 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[19]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //$ BREAK LINE */}

          
        
            {/* //$ BLOCK:6 MASTER */}


              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[5]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

          

        
            {/* //! DATA 21 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[20]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 22 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[21]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 23 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[22]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //! DATA 24 */}

              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[23]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />


            {/* //$ BREAK LINE */}

          
        
            {/* //$ BLOCK:7 MASTER */}

            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[6]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
          

        
            {/* //! DATA 25 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[24]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 26 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[25]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 27 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[26]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 28 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[27]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //$ BREAK LINE */}

            
          
        
            {/* //$ BLOCK:8 MASTER */}

            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[7]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
          

        
            {/* //! DATA 29 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[28]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 30 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[29]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 31 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[30]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 32 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[31]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //$ BREAK LINE */}

            
          
        
            {/* //$ BLOCK:9 MASTER */}

            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[8]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
          

        
            {/* //! DATA 33 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[32]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 34 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[33]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 35 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[34]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 36 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[35]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //$ BREAK LINE */}

          
        
            {/* //$ BLOCK:10 MASTER */}

            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[9]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
          

        
            {/* //! DATA 37 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[36]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 38 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[37]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 39 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[38]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 40 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[39]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //$ BREAK LINE */}

            
          
        
            {/* //$ BLOCK:11 MASTER */}

            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[10]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
          

        
            {/* //! DATA 41 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[40]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 42 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[41]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 43 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[42]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 44 */}
                          <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[43]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            
          
        
            {/* //$ BLOCK:12 MASTER */}

            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[11]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

            {/* //$ BREAK LINE */}

            
          

        
            {/* //! DATA 45 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[44]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 46 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[45]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 47 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[46]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 48 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[47]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //$ BREAK LINE */}

            
          

        
            {/* //$ BLOCK:13 MASTER */}

            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[12]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
          

        
            {/* //! DATA 49 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[48]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 50 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[49]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 51 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[50]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 52 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[51]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //$ BREAK LINE */}

            
          
        
            {/* //$ BLOCK:14 MASTER */}

            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[13]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
          

        
            {/* //! DATA 53 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[52]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 54 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[53]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 55 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[54]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 56 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[55]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //$ BREAK LINE */}

            
          
        
            {/* //$ BLOCK:15 MASTER */}

            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[14]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
          

        
            {/* //! DATA 57 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[56]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 58 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[57]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 59 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[58]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 60 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[59]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //$ BREAK LINE */}

            
          
        
            {/* //$ BLOCK:16 MASTER */}

            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[15]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
          

        
            {/* //! DATA 61 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[60]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 62 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[61]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 63 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[62]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //! DATA 64 */}
            
              <HoverComponent
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMatrix={pageMatrix}
                pageMat={pageMatrix[63]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />
            

            {/* //$ BREAK LINE */}

            
          

        
            {/* //$ BREAK LINE */}

            
          

        
            {/* //# Y1 MASTER */}
            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[20]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

            {/* //# Y2 MASTER */}
            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[21]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

            {/* //# Y3 MASTER */}
            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[22]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

            {/* //# Y4 MASTER */}
            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[23]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

            {/* //$ BREAK LINE */}

            
          

        
            {/* //$ BREAK LINE */}

            
          

        
            {/* //@ X1 MASTER */}
            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[16]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

            {/* //@ X2 MASTER */}
            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[17]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

            {/* //@ X3 MASTER */}

            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[18]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

            {/* //@ X4 MASTER */}

            
              <MasterHover
                projectId={projectId}
                keyClick={keyClick}
                setKeyClick={setKeyClick}
                pageMaster={pageMaster}
                pageMat={pageMaster[19]}
                usedKeys={usedKeys}
                setKeys={setKeys}
                setKeysInUse={setKeysInUse}
              />

            {/* //$ BREAK LINE */}
            </tbody>
        </Table>
      )}
    </>
  );
};

export default ListTable;
