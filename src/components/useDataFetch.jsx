import { useQuery, useInfiniteQuery, useMutation, useQueries } from '@tanstack/react-query';

export const useDataFetch = ({url, options, queryKey, config, queryType, queries}) => {

    let result = "";

    if(queryType === "query"){

        result = useQuery(queryKey, async () => {

            const response = await fetch(url, options);
            const data = response.json();
            return data;
    
        }, config);

    }else if(queryType === "infiniteQuery"){

        result = useInfiniteQuery(queryKey, async () => {

            const response = await fetch(url, options);
            const data = response.json();
            return data;
    
        }, config);

    }else if(queryType === "mutation"){

        result = useMutation(async () => {

            const response = await fetch(url, options);
            const data = response.json();
            return data;
    
        }, config);

    }else if(queryType === "queries"){

        result = useQueries({
            
            queries: queries

        });

    };
    

    return result;
};