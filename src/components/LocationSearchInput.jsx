import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { useState } from "react";
import _debounce from 'lodash/debounce';
import { useGetLocationsQuery } from '../store/apiSlice';
import { useDispatch } from 'react-redux';
import { setSearch } from '../store/searchSlice';

const LocationSearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const { data, isLoading } = useGetLocationsQuery(searchTerm, { skip: !searchTerm?.length })
    const dispatch = useDispatch()

    const handleSearch = _debounce((query) => {
        setSearchTerm(query);
    }, 200);

    const handleChange = (selectedItem) => {
        if (!selectedItem?.length) return
        dispatch(setSearch(selectedItem[0].label))
    }
    return (
        <div>
            <AsyncTypeahead
                filterBy={() => true}
                className='col-12 col-sm-8 col-lg-5 m-auto'
                id="location_search"
                isLoading={isLoading}
                labelKey="label"
                minLength={1}
                onSearch={handleSearch}
                onChange={handleChange}
                options={data?.length ? data : []}
                placeholder="Search for a place"
                size='lg'
            />
        </div>
    );
};

export default LocationSearchInput