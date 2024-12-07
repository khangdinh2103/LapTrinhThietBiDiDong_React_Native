import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getJobs, createJob, updateJob, deleteJob } from "../components/redux/toolkit";

const Screen2 = ({ navigation }) => {
  const dispatch = useDispatch();

  // Lấy trạng thái từ Redux
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getJobs()); // Gọi action để lấy danh sách công việc
  }, [dispatch]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Lọc công việc (logic này có thể áp dụng riêng trong Redux nếu cần)
  };

  const handleAddJob = async (title) => {
    dispatch(createJob(title));
  };

  const handleUpdateJob = async (id, newTitle) => {
    dispatch(updateJob({ id, newTitle }));
  };

  const handleDeleteJob = async (id) => {
    dispatch(deleteJob(id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.jobContainer}>
      <Text style={styles.jobText}>{item.title}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Screen3", {
            jobId: item.id,
            jobTitle: item.title,
            onUpdate: handleUpdateJob,
          })
        }
      >
        <Text style={styles.editText}>✏️</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDeleteJob(item.id)}>
        <Text style={styles.deleteText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={require("../assets/Frameprofile.png")} />
        </View>
        <View>
          <Text style={styles.greeting}>Hi Twinkie</Text>
          <Text style={styles.subGreeting}>Have a great day ahead</Text>
        </View>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={jobs.filter((job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate("Screen3", { onAdd: (title) => handleAddJob(title) })
        }
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 16,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 80,
  },
  jobContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  jobText: {
    fontSize: 16,
  },
  editText: {
    fontSize: 20,
    color: "#007BFF",
  },
  deleteText: {
    fontSize: 20,
    color: "#FF0000",
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: "50%",
    marginLeft: -25,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

export default Screen2;
