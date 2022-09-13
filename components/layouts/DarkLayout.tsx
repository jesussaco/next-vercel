
interface Props {
  children: React.ReactNode;
}

export const DarkLayout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(253,253,253,0.3)',
        padding: '10px'
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { children }
        </div>
    </div>
  )
}
