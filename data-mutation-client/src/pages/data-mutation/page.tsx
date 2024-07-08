import ChangeLayerName from '../../features/mutation/layer/changeLayerName'

const dataMutationComponentSelector = (type: string) => {
  return {
    changeLayerName: <ChangeLayerName />,
  }[type]
}

export default function DataMutationPage() {
  const dataMutationType = 'changeLayerName'

  return <>{dataMutationComponentSelector(dataMutationType)}</>
}
