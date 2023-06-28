import { useQuery, useInfiniteQuery, useMutation, useQueries} from '@tanstack/react-query';

export const useReactQuery = ({queryKey, config, queryType, queries, queryFn}) => {

    let result = "";

    if(queryType === "query"){

        result = useQuery(queryKey, queryFn, config);

    }else if(queryType === "infiniteQuery"){

        result = useInfiniteQuery(queryKey, queryFn, config);

    }else if(queryType === "mutation"){

        result = useMutation(queryFn, config);

    }else if(queryType === "queries"){

        result = useQueries({queries: queries});

    };

    return result;
};