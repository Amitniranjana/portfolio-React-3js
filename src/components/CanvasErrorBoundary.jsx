import React from 'react';

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('CanvasErrorBoundary caught an error', error, info);
  }

  reset() {
    this.setState({ hasError: false, error: null });
  }

  render() {
    if (this.state.hasError) {
      const message = this.state.error ? this.state.error.message || String(this.state.error) : 'Unknown error';
      return (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <div style={{ pointerEvents: 'auto', background: 'rgba(0,0,0,0.85)', color: '#fff', padding: 20, borderRadius: 8, maxWidth: 640, textAlign: 'left' }}>
            <h3 style={{ margin: 0 }}>Canvas error</h3>
            <p style={{ marginTop: 8, whiteSpace: 'pre-wrap', fontSize: 13 }}>{message}</p>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button onClick={() => window.location.reload()} style={{ background: '#ff5555', border: 'none', color: '#fff', padding: '8px 12px', borderRadius: 6, cursor: 'pointer' }}>Reload</button>
              <button onClick={this.reset} style={{ background: '#4caf50', border: 'none', color: '#fff', padding: '8px 12px', borderRadius: 6, cursor: 'pointer' }}>Dismiss</button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default CanvasErrorBoundary;
