import PopularJobCard from '@/components/common/cards/popular/PopularJobCard'
import { COLORS, SIZES } from '@/constants'
import useFetch from '@/hooks/useFetch'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native'
import styles from './popularjobs.style'

const Popularjobs = () => {
  const router = useRouter()
  const [selectedJob, setSelectedJob] = useState()
  const {data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1,
  })

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item.job_id)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
            data={data} 
            renderItem={({item}) => (
              <PopularJobCard
                item={item}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs