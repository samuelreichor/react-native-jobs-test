import NearbyJobCard from '@/components/common/cards/nearby/NearbyJobCard'
import { COLORS } from '@/constants'
import useFetch from '@/hooks/useFetch'
import { useRouter } from 'expo-router'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import styles from './nearbyjobs.style'

const Nearbyjobs = () => {
  const router = useRouter()
  const {data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1,
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
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
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs