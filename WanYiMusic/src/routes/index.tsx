import * as React from 'react'
import {Route,IndexRoute} from 'react-router'
import APP from '../containers/App'
import A from '../views/A'
import B from '../views/B'

export default (
        <Route path='/' component={APP}>
            {/*IndexRoute 访问根组件/时 同时加载子组件A组件,  */}
            <IndexRoute component={A}></IndexRoute>
            {/*IndexRedirect 访问根组件重定向到A组件 */}
            {/* <IndexRedirect to='A'></IndexRedirect>  */}
            <Route path="A" component={A}></Route>
            <Route path="B" component={B}></Route>
        </Route>
);