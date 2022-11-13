const Filter = ({ ...props }) => {

    const handleChange = (accion, value) => {
        switch (accion) {
            case 'anio':
                props.setAnio(parseInt(value))
                break;
            case 'mes':
                props.setMes(parseInt(value))
                break;
            case 'tipo':
                props.setTipo(value)
                break;

            default:
                break;
        }
    }

    return (
        <div className="filter">
            <div>
                <label>Seleccione Año</label><br />
                <select onChange={(e) => handleChange('anio', e.target.value)}>
                    <option value="2022"> 2022 </option>
                    <option value="2021"> 2021 </option>
                </select>
            </div>
            <div>
                <label>Seleccione Mes</label> <br />
                <select onChange={(e) => handleChange('mes', e.target.value)}>
                    <option value="8"> Agosto </option>
                    <option value="7"> Julio </option>
                </select>
            </div>
            <div>
                <label> Tipo de Gráfico</label> <br />
                <select onChange={(e) => handleChange('tipo', e.target.value)}>
                    <option value="Barras"> Barras </option>
                    <option value="Area"> Área </option>
                    <option value="Pie"> Pie </option>
                </select>
            </div>
        </div>
    )
}

export default Filter