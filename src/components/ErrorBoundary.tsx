import React, {ErrorInfo} from 'react'
import { Typography } from '@mui/material'

export class ErrorBoundary extends React.Component {

  constructor(props: Record<string, any>) {
    super(props)
    this.state = {hasError: false}
  }


  static getDerivedStateFromError() {
    // 更新 state 以至於下一個 render 會顯示 fallback UI
    return {hasError: true}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 你也可以把錯誤記錄到一個錯誤回報系統服務
    console.log(error, errorInfo)
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      // 你可以 render 任何客製化的 fallback UI
      return  (
        <Typography variant={'h5'}>There are some problems with system....</Typography>
      )
    }

    // @ts-ignore
    return this.props.children
  }
}
