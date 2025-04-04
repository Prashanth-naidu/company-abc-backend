package com.companyabc.backend.service;

import com.companyabc.backend.model.Heading;
import com.companyabc.backend.repository.HeadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HeadingService {
    
    @Autowired
    private HeadingRepository headingRepository;
    
    public List<Heading> getAllHeadings() {
        return headingRepository.findAll();
    }
    
    public Heading getFirstHeading() {
        List<Heading> headings = headingRepository.findAll();
        return headings.isEmpty() ? null : headings.get(0);
    }
    
    public Heading saveHeading(Heading heading) {
        // If there's already a heading, update it instead of creating a new one
        List<Heading> existingHeadings = headingRepository.findAll();
        if (!existingHeadings.isEmpty()) {
            heading.setId(existingHeadings.get(0).getId());
        }
        return headingRepository.save(heading);
    }
} 