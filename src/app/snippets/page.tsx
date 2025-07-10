"use client";
import { useState } from "react";
import {
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Card,
  CardContent,
  IconButton,
  Box,
  styled,
} from "@mui/material";
import {
  Search as SearchIcon,
  Code as CodeIcon,
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  FilterList as FilterIcon,
} from "@mui/icons-material";
import styles from "./page.module.css";

// Styled components matching your theme
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgb(27,26,33)",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.1)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.2)",
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "rgb(20,19,25)",
  color: "gray",
  border: "1px solid",
  fontSize: "11px",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "rgb(30,29,35)",
  },
}));

const SearchField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgb(27,26,33)",
    borderRadius: "15px",
    border: "1px solid rgba(255,255,255,0.1)",
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.1)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255,255,255,0.2)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EFCC00",
    },
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInputAdornment-root .MuiSvgIcon-root": {
    color: "gray",
  },
}));

// Sample snippets data
const SNIPPETS_DATA = [
  {
    id: 1,
    title: "React Custom Hook: useLocalStorage",
    description:
      "A reusable hook for managing localStorage with React state synchronization",
    code: `const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  
  return [storedValue, setValue];
};`,
    language: "JavaScript",
    category: "React",
    tags: ["React", "Hooks", "localStorage"],
    githubUrl: "https://github.com/shivkr1357/snippets",
    demoUrl: "https://codesandbox.io/",
  },
  {
    id: 2,
    title: "Express.js Error Handler Middleware",
    description:
      "Centralized error handling middleware for Express.js applications",
    code: `const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};

app.use(errorHandler);`,
    language: "JavaScript",
    category: "Backend",
    tags: ["Express", "Node.js", "Error Handling"],
    githubUrl: "https://github.com/shivkr1357/snippets",
    demoUrl: "https://codesandbox.io/",
  },
  {
    id: 3,
    title: "CSS Grid Layout Helper",
    description: "Utility classes for responsive CSS Grid layouts",
    code: `.grid-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.grid-item {
  background: rgb(27,26,33);
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.1);
}`,
    language: "CSS",
    category: "Frontend",
    tags: ["CSS", "Grid", "Responsive"],
    githubUrl: "https://github.com/shivkr1357/snippets",
    demoUrl: "https://codesandbox.io/",
  },
  {
    id: 4,
    title: "TypeScript Generic API Response",
    description: "Type-safe API response handling with TypeScript generics",
    code: `interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

const fetchData = async <T>(url: string): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};`,
    language: "TypeScript",
    category: "TypeScript",
    tags: ["TypeScript", "API", "Generics"],
    githubUrl: "https://github.com/shivkr1357/snippets",
    demoUrl: "https://codesandbox.io/",
  },
  {
    id: 5,
    title: "Next.js Image Optimization",
    description: "Optimized image component with blur placeholder",
    code: `import Image from 'next/image';

const OptimizedImage = ({ src, alt, width, height }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    className="rounded-lg"
  />
);`,
    language: "JavaScript",
    category: "Next.js",
    tags: ["Next.js", "Image", "Optimization"],
    githubUrl: "https://github.com/shivkr1357/snippets",
    demoUrl: "https://codesandbox.io/",
  },
  {
    id: 6,
    title: "MongoDB Aggregation Pipeline",
    description: "Complex aggregation pipeline for data analysis",
    code: `const pipeline = [
  { $match: { status: 'active' } },
  { $group: {
    _id: '$category',
    total: { $sum: '$amount' },
    count: { $sum: 1 }
  }},
  { $sort: { total: -1 } },
  { $limit: 10 }
];

const result = await collection.aggregate(pipeline);`,
    language: "JavaScript",
    category: "Database",
    tags: ["MongoDB", "Aggregation", "Pipeline"],
    githubUrl: "https://github.com/shivkr1357/snippets",
    demoUrl: "https://codesandbox.io/",
  },
];

const CATEGORIES = [
  "All",
  "React",
  // "Backend",
  // "Frontend",
  // "TypeScript",
  // "Next.js",
  // "Database",
];

export default function Snippets() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSnippets = SNIPPETS_DATA.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      snippet.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || snippet.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Stack
      spacing={4}
      sx={{
        padding: { xs: 2, md: 4 },
        width: "100%",
      }}
    >
      {/* Header Section */}
      <Stack spacing={2}>
        {/* <Typography
          variant="h3"
          className={styles.gradientText}
          sx={{
            fontWeight: 600,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Code Snippets
        </Typography> */}
        <Typography
          variant="body1"
          color="gray"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          A collection of useful code snippets, utilities, and reusable
          components
        </Typography>
      </Stack>

      {/* Search and Filter Section */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={{ xs: "stretch", md: "center" }}
      >
        <SearchField
          placeholder="Search snippets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ flex: 1 }}
        />
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
          {CATEGORIES.map((category) => (
            <StyledChip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "filled" : "outlined"}
              className={styles.categoryChip}
              sx={{
                backgroundColor:
                  selectedCategory === category ? "#EFCC00" : "transparent",
                color: selectedCategory === category ? "black" : "gray",
                borderColor:
                  selectedCategory === category
                    ? "#EFCC00"
                    : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </Stack>
      </Stack>

      {/* Snippets Grid */}
      <Stack
        direction="row"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "flex-start",
          alignItems: "stretch",
          width: "100%",
        }}
      >
        {filteredSnippets.map((snippet) => (
          <StyledCard
            key={snippet.id}
            className={styles.snippetCard}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%", lg: "28%" },
              minWidth: 280,
              minHeight: "300px",
              flex: "1 1 280px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ padding: 3 }}>
              <Stack spacing={2}>
                {/* Header */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "white",
                        marginBottom: 1,
                        lineHeight: 1.3,
                      }}
                    >
                      {snippet.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="gray"
                      sx={{ lineHeight: 1.5 }}
                    >
                      {snippet.description}
                    </Typography>
                  </Box>
                </Stack>

                {/* Code Preview */}
                <Box
                  className={styles.codePreview}
                  sx={{
                    backgroundColor: "rgb(20,19,25)",
                    borderRadius: "10px",
                    padding: 2,
                    border: "1px solid rgba(255,255,255,0.1)",
                    maxHeight: "120px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#EFCC00",
                      fontFamily: "monospace",
                      fontSize: "11px",
                      lineHeight: 1.4,
                    }}
                  >
                    {snippet.code.split("\n").slice(0, 6).join("\n")}
                    {snippet.code.split("\n").length > 6 && "..."}
                  </Typography>
                </Box>

                {/* Tags */}
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ flexWrap: "wrap", gap: 1 }}
                >
                  {snippet.tags.map((tag) => (
                    <StyledChip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{ fontSize: "10px" }}
                    />
                  ))}
                </Stack>

                {/* Actions */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#EFCC00",
                      fontWeight: 500,
                      textTransform: "uppercase",
                    }}
                  >
                    {snippet.language}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      size="small"
                      className={styles.actionButton}
                      sx={{ color: "gray", "&:hover": { color: "#EFCC00" } }}
                      onClick={() => window.open(snippet.githubUrl, "_blank")}
                    >
                      <GitHubIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      className={styles.actionButton}
                      sx={{ color: "gray", "&:hover": { color: "#EFCC00" } }}
                      onClick={() => window.open(snippet.demoUrl, "_blank")}
                    >
                      <LaunchIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </StyledCard>
        ))}
      </Stack>

      {/* Empty State */}
      {filteredSnippets.length === 0 && (
        <Stack
          alignItems="center"
          spacing={2}
          className={styles.emptyState}
          sx={{ padding: 8, color: "gray" }}
        >
          <CodeIcon sx={{ fontSize: 60, opacity: 0.5 }} />
          <Typography variant="h6">No snippets found</Typography>
          <Typography variant="body2">
            Try adjusting your search terms or category filter
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}
