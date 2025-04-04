package com.companyabc.backend.repository;

import com.companyabc.backend.model.Heading;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HeadingRepository extends JpaRepository<Heading, Long> {
} 