import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import Label from '@mui/icons-material/Label';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const screens = [
    {
        id: "1", name: 'Enterprise Structure', hasChild: true,
        children: [
            {
                id: "2", name: 'Business Process', hasChild: true, children: [
                    { id: "3", name: 'Record to Report', hasChild: false },
                    {
                        id: "4", name: 'Procure to Pay', hasChild: true, children: [
                            { id: "5", name: 'Manage Invoices', hasChild: false },
                            { id: "6", name: 'Process Payments', hasChild: false },
                            { id: "7", name: 'Reporting', hasChild: false }
                        ]
                    },
                    { id: "8", name: 'Acquire to Retire', hasChild: false },
                    { id: "9", name: 'Order to Cash', hasChild: false },
                ]
            }
        ]
    },
]

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular,
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
            color: 'var(--tree-view-color)',
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(2),
        },
    },
}));

function StyledTreeItem(props) {
    const {
        bgColor,
        color,
        labelIcon: LabelIcon,
        labelInfo,
        labelText,
        ...other
    } = props;

    return (
        <StyledTreeItemRoot
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                    <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>
                </Box>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            {...other}
        />
    );
}

StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
};

export default function GmailTreeView() {
    return (
        <TreeView
            aria-label="gmail"
            defaultExpanded={['3']}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
            sx={{ height: 264, flexGrow: 1, maxWidth: 400 }}
        >
            {screens.map((screen, index) => (
                <StyledTreeItem nodeId={screen.id} labelText={screen.name} labelIcon={MailIcon}>
                    {screen.hasChild && screen.children.map((child1, index) => (
                        <StyledTreeItem nodeId={child1.id} labelText={child1.name}>
                            {child1.hasChild && child1.children.map((child2, index) => (
                                <StyledTreeItem nodeId={child2.id} labelText={child2.name}>
                                    {child2.hasChild && child2.children.map((child3, index) => (
                                <StyledTreeItem nodeId={child3.id} labelText={child3.name}>
                                </StyledTreeItem>
                            ))}
                                </StyledTreeItem>
                            ))}
                        </StyledTreeItem>
                    ))}
                </StyledTreeItem>
            ))}


        </TreeView>
    );
}
