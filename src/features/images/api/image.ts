import { axios } from '@/libs/axios';
import { queryClient, QueryConfig } from '@/libs/react-query';
import { Image } from '@/types/objects';
import { useQueries, useQuery } from 'react-query';

export const getImage = ({ imageId }: { imageId: string }): Promise<Image> => {
  return axios.get(`/image/${imageId}`);
};

type QueryFnType = typeof getImage;

type UseImageOptions = {
  imageId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useImage = ({ imageId, config }: UseImageOptions) => {
  return useQuery({
    ...config,
    queryKey: imageId,
    queryFn: () => getImage({ imageId }),
  });
};

type UseImagesOptions = {
  imageIds: string[];
  config?: QueryConfig<QueryFnType>;
};

export const useImages = ({ imageIds, config }: UseImagesOptions) => {
  return useQueries(
    imageIds.map((id) => {
      return {
        ...config,
        queryKey: id,
        queryFn: () => getImage({ imageId: id }),
      };
    }),
  );
};

export const InvalidateImage = (imageId) => {
  queryClient.invalidateQueries(imageId);
};
