import CreateMatrix from "./createMatrix";

export const SubmitMatrix = (props) => {
  return (
    <div className="App">
      <div>
        <CreateMatrix
          tmk={props.tmk}
          sop={props.sop}
          smMatrix={props.smMatrix}
          smFilter={props.smFilter}
          mac={props.mac}
          matrix={props.matrix}
          master={props.master}
          page={props.page}
          setPage={props.setPage}
          pageName={props.pageName}
          setPageName={props.setPageName}
          pageMatrix={props.pageMatrix}
          setPageMatrix={props.setPageMatrix}
          pageMaster={props.pageMaster}
          setPageMaster={props.setPageMaster}
          masterObjects={props.masterObjects}
          matrixObjects={props.matrixObjects}
          keyClick={props.keyClick}
          setKeyClick={props.setKeyClick}
          pageNames={props.pageNames}
          setKeys={props.setKeys}
          usedKeys={props.usedKeys}
          projectId={props.projectId}
          setResetKeys={props.setResetKeys}
          resetKeys={props.resetKeys}
          setKeysInUse={props.setKeysInUse}
          keysInUse={props.keysInUse}
        />
      </div>
    </div>
  );
};

export default SubmitMatrix;
