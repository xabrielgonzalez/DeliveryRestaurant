import { useQuery } from '@tanstack/react-query';

export const useDataFetch = ({url, options, queryKey, config}) => {

    const result = useQuery(queryKey, async () => {

        const response = await fetch(url, options);
        const data = response.json();
        return data;

    }, config);

    return result;
};