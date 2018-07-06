import ActionRegistry from 'core/ActionRegistry'
import HelperRegistry from 'core/HelperRegistry'

export class ActionHelper {
  loadDataTypes (dispatch) {
    dispatch(ActionRegistry.dataLoadTypesRequest())
    $.ajax({
      url: '/assets/data/types.json',
      dataType: 'json',
      success: (result) => dispatch(ActionRegistry.dataLoadTypesSuccess(result)),
      error: (error) => dispatch(ActionRegistry.dataLoadTypesFailure(error))
    })
  }

  loadDataModules (dispatch) {
    dispatch(ActionRegistry.dataLoadModulesRequest())
    $.ajax({
      url: '/assets/data/modules.json',
      dataType: 'json',
      success: (result) => dispatch(ActionRegistry.dataLoadModulesSuccess(result)),
      error: (error) => dispatch(ActionRegistry.dataLoadModulesFailure(error))
    })
  }

  loadDataSample (dispatch) {
    dispatch(ActionRegistry.dataLoadSampleRequest())
    $.ajax({
      url: '/assets/data/sample.json',
      dataType: 'json',
      success: (result) => dispatch(ActionRegistry.dataLoadSampleSuccess(result)),
      error: (error) => dispatch(ActionRegistry.dataLoadSampleFailure(error))
    })
  }
}

const Helper = new ActionHelper()

HelperRegistry.register(Helper, 'Action')

export default Helper
