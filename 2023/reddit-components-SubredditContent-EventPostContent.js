// https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-EventPostContent.0e66ac7f34134e1fe1dd.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SubredditContent-EventPostContent"], {
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx");
			var x = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					fill: "none",
					className: t
				}, r.a.createElement("g", {
					clipPath: "url(#clip0_826_294874)"
				}, r.a.createElement("path", {
					d: "M9.13086 15.2315V18.9725C9.1307 19.0439 9.1119 19.114 9.07631 19.1759C9.04072 19.2378 8.98958 19.2893 8.92795 19.3254C8.86633 19.3615 8.79635 19.3808 8.72495 19.3815C8.65354 19.3822 8.58319 19.3643 8.52086 19.3295L1.19986 15.2324C1.10316 15.178 1.02266 15.0989 0.966602 15.0031C0.910549 14.9074 0.880958 14.7984 0.88086 14.6874V6.53545C0.880748 6.46296 0.899904 6.39175 0.936365 6.3291C0.972825 6.26645 1.02528 6.21461 1.08836 6.1789C1.15144 6.14319 1.22288 6.12488 1.29536 6.12586C1.36784 6.12683 1.43876 6.14705 1.50086 6.18445L4.66786 8.08445C4.80909 8.16923 4.92596 8.28912 5.00709 8.43247C5.08823 8.57582 5.13087 8.73773 5.13086 8.90245V12.5145L8.63086 14.3934C8.78199 14.4751 8.90824 14.5961 8.99625 14.7436C9.08427 14.8911 9.13078 15.0597 9.13086 15.2315ZM9.88086 4.93145L13.3809 6.81345C13.5262 6.89146 13.6893 6.93044 13.8543 6.92658C14.0192 6.92273 14.1803 6.87617 14.3219 6.79145L17.5089 4.87945C17.5704 4.84257 17.6211 4.79016 17.656 4.72746C17.6909 4.66477 17.7087 4.59401 17.7076 4.52228C17.7064 4.45055 17.6865 4.38037 17.6497 4.31879C17.6129 4.25721 17.5605 4.2064 17.4979 4.17145L10.1869 0.0794502C10.0933 0.0273472 9.98796 0 9.88086 0C9.77376 0 9.66843 0.0273472 9.57486 0.0794502L2.25886 4.17945C2.19626 4.21449 2.14398 4.26538 2.10726 4.32701C2.07055 4.38863 2.05069 4.45884 2.04967 4.53057C2.04866 4.6023 2.06653 4.67303 2.10149 4.73567C2.13645 4.79831 2.18728 4.85066 2.24886 4.88745L5.43486 6.79945C5.57661 6.88416 5.73788 6.93071 5.90296 6.93457C6.06805 6.93842 6.23131 6.89945 6.37686 6.82145L9.88086 4.93145ZM14.6309 12.5104L11.1309 14.3895C10.9796 14.4712 10.8532 14.5923 10.7652 14.74C10.6772 14.8877 10.6308 15.0565 10.6309 15.2284V18.9694C10.6308 19.0408 10.6495 19.111 10.6849 19.1729C10.7204 19.2349 10.7714 19.2864 10.833 19.3225C10.8946 19.3586 10.9645 19.378 11.0359 19.3787C11.1073 19.3794 11.1776 19.3614 11.2399 19.3265L18.5609 15.2264C18.6579 15.1723 18.7387 15.0933 18.795 14.9975C18.8512 14.9016 18.8809 14.7926 18.8809 14.6814V6.53545C18.881 6.46296 18.8618 6.39175 18.8254 6.3291C18.7889 6.26645 18.7364 6.21461 18.6734 6.1789C18.6103 6.14319 18.5388 6.12488 18.4664 6.12586C18.3939 6.12683 18.323 6.14705 18.2609 6.18445L15.0939 8.08445C14.9526 8.16923 14.8358 8.28912 14.7546 8.43247C14.6735 8.57582 14.6308 8.73773 14.6309 8.90245V12.5104Z",
					fill: "#0F1A1C"
				})), r.a.createElement("defs", null, r.a.createElement("clipPath", {
					id: "clip0_826_294874"
				}, r.a.createElement("rect", {
					width: "20",
					height: "20",
					fill: "white"
				}))))
			};
			var h = () => r.a.createElement("div", {
					className: "flex items-center justify-center w-full rounded p-sm bg-[color:var(--newCommunityTheme-bodyTextAlpha03)]"
				}, r.a.createElement(x, {
					className: "h-[18px]"
				})),
				C = s("./src/reddit/components/Econ/Audio/index.m.less"),
				v = s.n(C),
				E = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx");
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var f = () => r.a.createElement("div", {
					className: v.a.endedClassicContainer
				}, r.a.createElement(E.a, {
					className: v.a.muteIcon
				})),
				j = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				P = s("./src/reddit/components/ExpandoButton/index.tsx"),
				g = s("./src/reddit/components/Flatlist/index.tsx"),
				y = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				_ = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				S = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				M = s("./src/reddit/components/ModModeReports/index.tsx"),
				w = s("./src/reddit/components/ModModeReports/helpers.ts"),
				N = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				L = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				I = s("./src/reddit/components/PostContainer/index.tsx"),
				k = s("./src/reddit/components/PostMeta/index.tsx"),
				A = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				T = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				D = s("./src/reddit/components/PostTitle/index.tsx"),
				F = s("./src/reddit/components/PostTopMeta/index.tsx"),
				B = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				V = s("./src/reddit/models/Audio/index.ts"),
				R = s("./src/reddit/models/Media/index.ts"),
				z = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				W = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				q = s("./src/reddit/constants/postLayout.ts"),
				H = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				U = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Y = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				K = s("./src/reddit/helpers/search/renderMedia.tsx"),
				G = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Q = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				J = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				X = s.n(J),
				Z = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/redditGQL/types.ts"),
				ee = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				te = s("./src/reddit/components/ClassicPost/index.m.less"),
				se = s.n(te);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const re = Object(d.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: d,
					handleVote: x,
					isExpanded: C,
					inSubredditOrProfile: v,
					eventFactory: E,
					flairStyleTemplate: O,
					formatTitle: W,
					hostPostData: J,
					isCheckboxSelected: te,
					isCurrentUserProfilePost: re,
					isFrontpage: ne,
					isGalleryTileLayoutDefault: ae,
					isLoggedIn: de,
					isOverlay: ie,
					imageGalleryCurrentItem: ce,
					moderatorPermissions: le,
					modModeEnabled: me,
					onClickPost: pe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: be,
					onSizeChanged: xe,
					poll: he,
					post: Ce,
					postId: ve,
					redditStyle: Ee,
					scrollerItemRef: Oe,
					showBulkActionCheckbox: fe,
					showEditFlair: je,
					showMedia: Pe,
					shouldShowInsightsButton: ge,
					subredditOrProfile: ye,
					toggleCheckbox: _e,
					userIsOp: Se,
					shouldShowGalleryTileOption: Me,
					showCTAExperimentDesign: we
				} = e, Ne = Object(l.a)(), Le = Object(c.a)(C);
				Object(o.useEffect)(() => {
					xe && Le !== C && xe(Ce.id)
				}, [C, xe, Ce.id, Le]);
				const Ie = Ee ? void 0 : O,
					ke = s || void 0,
					Ae = Object(Y.a)(le),
					Te = Object(H.a)(le),
					De = Object(U.a)(le),
					Fe = me && Y.a,
					Be = Object(S.a)(Ce),
					Ve = Object(w.c)(Ce),
					Re = !!Ce.media && Ce.media.type === R.o.RTJSON,
					ze = Se && Re,
					We = v && !Pe,
					qe = !!Ce.recommendationContext,
					He = {
						flairStyleTemplate: Ie,
						post: Ce,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: re,
						isOverlay: ie,
						shouldShowSubscribeButton: !(ne && de) || qe && de,
						subredditOrProfile: ye
					},
					Ue = Object(n.t)(Ce, ce),
					[Ye, Ke] = Object(o.useState)(!1),
					Ge = Object(o.useCallback)(() => {
						Ke(!Ye), Ne(Object(Q.d)(ve))
					}, [Ye, ve, Ne]);
				let Qe = r.a.createElement(z.a, {
					className: se.a.classicThumbnail,
					crosspost: ke && Ce,
					isMeta: Ce.isMeta,
					post: ke || Ce,
					redditStyle: Ee,
					templatePlaceholderImage: Ie && Ie.postPlaceholderImage
				});
				Object(V.b)(Ce) ? Qe = r.a.createElement(f, null) : Object(R.G)(Ce) && (Qe = r.a.createElement(h, null));
				const Je = Object(Z.r)(Ce);
				return r.a.createElement(I.b, {
					className: Object(a.a)(X.a.classicPostStyles, se.a.postContainer, Object(G.a)(e), {
						[se.a.shouldShowOverflow]: ge
					}, t),
					isOverlay: ie,
					style: {
						...Object(G.d)(e),
						...Object(G.b)(Ie)
					},
					post: Ce,
					onClick: pe,
					eventFactory: E
				}, r.a.createElement(T.a, {
					model: Ce,
					handleVote: x,
					showBulkActionCheckbox: fe,
					isCheckboxSelected: te,
					toggleCheckbox: _e,
					flairStyleTemplate: Ie,
					redditStyle: Ee,
					postId: ve
				}), r.a.createElement(L.a, {
					className: ge ? se.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Ie
				}, r.a.createElement(j.a, {
					className: se.a.eventMeta,
					post: Ce
				}), r.a.createElement("div", {
					className: se.a.mainBody
				}, r.a.createElement("div", {
					className: We ? se.a.expandoContainer : se.a.thumbnailContainer
				}, !We && Qe, r.a.createElement(P.a, {
					crosspost: ke,
					className: se.a.rightExpando,
					isExpanded: !!C,
					post: Ce,
					useMediaIcons: !1
				})), r.a.createElement("div", {
					className: Object(a.a)(se.a.content, {
						[se.a.showBulkActionCheckbox]: fe
					}),
					"data-click-id": "body"
				}, Je && r.a.createElement(N.a, {
					content: Ce.recommendationContext.content,
					layout: q.g.Classic,
					post: Ce
				}), r.a.createElement(D.c, {
					className: he ? se.a.titleWithPoll : void 0,
					format: W,
					poll: he,
					post: Ce,
					redditStyle: Ee,
					size: D.b.Medium,
					titleColor: Ie && Ie.postTitleColor,
					isOverlay: ie
				}, Ce.source && !ke && !Ce.isSurveyAd && r.a.createElement(B.a, {
					href: Ce.source.url,
					isSponsored: Ce.isSponsored,
					postId: Ce.id,
					source: Ce.source
				}, Object(i.a)(Ce))), r.a.createElement(k.a, oe({
					key: "PostMeta"
				}, He)), me && Ae && Be && r.a.createElement(_.a, {
					thing: Ce
				}), me && Ae && Ve && r.a.createElement(M.a, {
					onIgnoreReports: ue,
					reportable: Ce
				}), Object(n.v)(Ce, ce) && r.a.createElement(m.a, {
					ctaExperimentDesign: we && "classic",
					className: Object(a.a)(se.a.adLinkWrapper, {
						[se.a.ctaExperiment]: we
					})
				}, r.a.createElement(p.a, {
					post: Ce,
					adLinkContent: Ue,
					ctaExperimentDesign: we && "classic"
				})), Ce.discussionType === $.n.Chat && r.a.createElement(ee.a, {
					postId: Ce.id
				}), r.a.createElement("div", {
					className: se.a.flatlistContainer
				}, r.a.createElement(P.a, {
					className: se.a.leftExpando,
					crosspost: ke,
					isExpanded: !!C,
					post: Ce,
					useMediaIcons: !1
				}), r.a.createElement(u.a, {
					className: se.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Ie,
					model: Ce,
					onVoteClick: x
				}), r.a.createElement(g.a, {
					className: se.a.flatlistSeparator
				}), !Ce.isSurveyAd && r.a.createElement(g.c, {
					className: se.a.flatlist,
					currentUser: d,
					hasModFlairPerms: Te,
					hasModPostPerms: Ae,
					hasModFullPerms: De,
					hostPostData: J,
					isOverlay: !!ie,
					modModeEnabled: me,
					onClickInsightsButton: Ge,
					onIgnoreReports: ue,
					onOpenReportsDropdown: be,
					post: Ce,
					shouldShowInsightsButton: ge,
					showEditPost: ze,
					showEditFlair: je,
					tooltipType: ie ? F.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(A.b)({
						editPost: !Fe,
						hide: !Fe,
						report: !Fe,
						mute: !Fe,
						save: !Fe
					})
				})), r.a.createElement(y.d, null))), Object(K.a)(Ce, se.a, Oe, C, Me, ae), ye && Ye && r.a.createElement(b.a, {
					className: se.a.creatorStatsContainer,
					post: Ce,
					subreddit: ye,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(W.a)(re)
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, r.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), r.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), r.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/index.m.less": function(e, t, s) {
			e.exports = {
				liveContainer: "reBgd-KYxGiWr_ZyzPgr_",
				userRow: "poHPrsWD-JtPCRh7foOm-",
				isListener: "_3DcaFqbAKhkVLYT6i2vxLy",
				speakerRings: "_1XlH7yy1d0pGBQ0hDDAaDv",
				listener: "_3fwbxY1I7EhKfr8MK7xT0S",
				speaker: "_1zEocOo_0euorSuKdx4-t2",
				snoovatar: "_23HWId-tu5O6LulDxLoVD1",
				userIcon: "Xzl_H3G7Qyd756Y0rQz4w",
				classic: "_2XdJHCLvUWJ2gdGBnugD5t",
				buttonContainer: "_2yhW3k4B2CUUSvt-3mqV3S",
				muteContainer: "_3mxKqH41iEa2lxIov7Eup-",
				muteIcon: "_18bneLE5nnOdUrY8P-eepo",
				fullRow: "_2cJzNEK-EGk9V7LDTIEFb-",
				endedContainer: "_21e_ZHJXEi7zMZ6XWWBz",
				nightMode: "z6LY0qX0g0puWE-RPF8XB",
				liveClassicContainer: "_3JLTqaLlFv8aPfzi9eQazu",
				classicSpeaker: "QsNKjj4EDQH2hYFYQB6T4",
				snoovatarHeadshotContainer: "_28VC5AU-z3J-h80HdMusUT",
				endedClassicContainer: "_2YXJIDv8TLzRj5vNdYs-_t",
				metaStatus: "OvWqIzFfbWF0I-5FMZ18I",
				isLive: "_3Vqz8YzNczoVWpOtpwXAit",
				processingButton: "nxYqAuGeco2RA9q0e9ECw"
			}
		},
		"./src/reddit/components/SubredditContent/EventPostContent/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/eventPosts/index.ts"),
				m = s("./src/reddit/components/ClassicPost/index.tsx"),
				p = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				u = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				b = s("./src/reddit/components/Scroller/Simple.tsx"),
				x = s("./src/reddit/components/SubredditContent/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/constants/postLayout.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/helpers/overlay/index.ts"),
				O = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				f = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/routes/postCreation/index.ts"),
				P = s("./src/reddit/selectors/eventPosts.ts"),
				g = s("./src/reddit/selectors/experiments/shredditModNav.ts"),
				y = s("./src/reddit/components/SubredditContent/index.m.less"),
				_ = s.n(y);
			const S = Object(i.c)({
					eventPosts: P.f,
					isPending: P.d,
					hasData: P.b,
					endCursor: P.a,
					isInShredditModNavExperiment: e => Object(g.a)(e, !0)
				}),
				M = Object(a.b)(S, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						onClickPost: t => {
							e(Object(E.a)(t.permalink))
						},
						fetchMorePosts: () => {
							e(Object(l.eventPostsRequested)(s))
						}
					}
				});
			class w extends n.a.PureComponent {
				renderEmptyState() {
					const {
						subredditName: e
					} = this.props;
					return n.a.createElement(p.c, {
						className: _.a.emptyStateContainer,
						text: o.fbt._("No upcoming or live events in r/{subredditName}", [o.fbt._param("subredditName", e)], {
							hk: "3wRma7"
						}),
						childrenPosition: "bottom"
					}, n.a.createElement(f.a, {
						name: "scheduled",
						className: _.a.icon
					}), n.a.createElement(d.a, {
						className: _.a.schedulePostLink,
						to: Object(j.c)(e)
					}, o.fbt._("Create Event Post", null, {
						hk: "PXBmQ"
					})))
				}
				renderBody() {
					const {
						endCursor: e,
						eventPosts: t,
						fetchMorePosts: s,
						hasData: o,
						onClickPost: r
					} = this.props;
					return n.a.createElement("div", {
						className: _.a.contentContainer
					}, n.a.createElement("div", {
						className: _.a.standaloneContainer
					}, o ? n.a.createElement(b.b, {
						className: _.a.scroller,
						onLoadMore: s,
						loadMoreToken: e || void 0
					}, t.map((e, t) => ({
						id: e.id,
						estHeight: Object(O.c)(e, C.g.Classic),
						render: s => n.a.createElement(m.default, {
							key: `event-post-id-${e.id}`,
							postId: e.id,
							className: _.a.eventPostContainer,
							first: 0 === t,
							isOverlay: !1,
							onClickPost: () => r(e)
						})
					}))) : this.renderEmptyState()))
				}
				render() {
					const {
						isPending: e,
						hasData: t,
						isInShredditModNavExperiment: s
					} = this.props;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(u.c, {
						className: Object(c.a)(_.a.topBar, s && "fixed bg-neutral-background mb-xs pr-0", {
							[_.a.default]: !s
						})
					}, n.a.createElement(d.a, {
						to: Object(j.c)(this.props.subredditName)
					}, n.a.createElement(v.l, null, o.fbt._("Schedule an event post", null, {
						hk: "nk1bA"
					})))), n.a.createElement(u.a, null, n.a.createElement(u.b, {
						className: _.a.pageTitle
					}, o.fbt._("Upcoming and live events", null, {
						hk: "MAeQO"
					})), !t && e ? Object(x.a)() : this.renderBody(), t && e && Object(x.a)(1)))
				}
			}
			t.default = M(Object(h.c)(w))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				i = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: C.d,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: C.S,
					moderatorPermissions: b.m,
					modModeEnabled: c.W,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: x.a,
					showMedia: c.t,
					flairStyleTemplate: c.Y,
					showCTAExperimentDesign: u.a
				},
				E = Object(o.b)(() => Object(r.c)(v), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === d.a.upvoted ? Object(n.ib)(s) : Object(n.v)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(n.eb)(s)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(E(Object(i.b)(e)))
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, s, o, n, a) => o ? e.crosspostRootId ? r.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, d(e, s, n, a)) : d(e, s, n, a) : null,
				d = (e, t, s, o) => r.a.createElement(n.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: o,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return d
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			}));
			var o = s("./src/reddit/components/CreatorStats/helpers.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case o.b.Available:
							return "insights_shown";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
							return "post_too_old";
						case o.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				d = (e, t) => s => ({
					...Object(n.q)(s),
					action: r.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(n.nb)(s),
					post: Object(n.M)(s, e),
					userSubreddit: Object(n.wb)(s),
					actionInfo: Object(n.d)(s, {
						reason: a(t)
					})
				}),
				i = (e, t) => s => ({
					...Object(n.q)(s),
					action: r.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(n.M)(s, t),
					subreddit: Object(n.nb)(s),
					userSubreddit: Object(n.wb)(s)
				}),
				c = e => {
					switch (e) {
						case o.b.Available:
							return "stats";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
						case o.b.Expired:
							return "no_data";
						case o.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(n.q)(t),
					action: r.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(n.d)(t, {
						pageType: "profile"
					}),
					post: Object(n.M)(t, e, void 0, 0),
					profile: Object(n.V)(t)
				}),
				m = (e, t, s) => o => ({
					...Object(n.q)(o),
					action: r.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(n.d)(o, {
						reason: c(t)
					}),
					post: Object(n.M)(o, e, void 0, s)
				}),
				p = (e, t, s, o, a, d) => i => ({
					...Object(n.q)(i),
					action: r.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(n.d)(i, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(n.M)(i, e, void 0, d),
					subreddit: Object(n.nb)(i),
					outbound: {
						postId: s,
						url: t,
						subredditId: o,
						subredditName: a
					}
				}),
				u = (e, t, s) => o => ({
					...Object(n.q)(o),
					action: r.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(n.d)(o, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(n.M)(o, e, void 0, s),
					subreddit: Object(n.nb)(o)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-EventPostContent.0e66ac7f34134e1fe1dd.js.map