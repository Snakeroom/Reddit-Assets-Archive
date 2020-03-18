// https://www.redditstatic.com/desktop2x/ModListing.ead5dc77d368f1a5b619.js
// Retrieved at 3/18/2020, 1:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing"], {
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/upperFirst.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				a = s("./src/config.ts"),
				o = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				c = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/components/PostList/Placeholder.tsx"),
				g = s("./src/reddit/components/EmptySubreddit.m.less"),
				E = s.n(g),
				h = s("./src/lib/lessComponent.tsx");
			const x = h.a.div("PrimaryText", E.a),
				_ = h.a.div("SecondaryText", E.a),
				f = h.a.div("MainContentWrapper", E.a),
				S = h.a.div("MainContent", E.a),
				O = h.a.wrapped(p.a, "BackgroundPlaceholder", E.a),
				M = h.a.wrapped(b.h, "SubmitLink", E.a),
				C = h.a.img("SnooImg", E.a),
				y = h.a.div("EmptyHomepage", E.a),
				j = e => {
					switch (e) {
						case o.P.RISING:
							return Object(u.c)("Create a new post and take all the glory");
						case o.P.TOP:
						case o.P.CONTROVERSIAL:
							return null;
						default:
							return Object(u.c)("Be the first to till this fertile land.")
					}
				},
				P = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const r = j(s);
					return d.a.createElement(S, null, d.a.createElement(x, null, (e => {
						switch (e) {
							case o.P.RISING:
								return Object(u.c)("Looks like nothing is rising fast enough in this subreddit");
							case o.P.TOP:
							case o.P.CONTROVERSIAL:
								return Object(u.c)("No posts were found using the ".concat(n()(e), " sort. Try changing the sort."));
							default:
								return Object(u.c)("There are no posts in this subreddit")
						}
					})(s)), t && !Object(l.a)(t) && !!r && d.a.createElement(d.a.Fragment, null, d.a.createElement(_, null, j(s)), d.a.createElement(M, {
						to: "/r/".concat(t, "/submit")
					}, d.a.createElement(c.c, null, "Add a post"))))
				},
				I = () => d.a.createElement(S, null, d.a.createElement(C, {
					src: "".concat(a.a.assetPath, "/img/snoo_discovery@1x.png")
				}), d.a.createElement(x, null, d.a.createElement(c.c, null, "Reddit gets better when you join communities, so find some that you’ll love!")), d.a.createElement(M, {
					to: "/r/popular"
				}, d.a.createElement(c.c, null, "Browse Popular Posts")));
			t.a = h.a.wrapped(e => d.a.createElement(y, null, d.a.createElement(O, {
				isLoading: !1,
				layout: m.g.Classic
			}), d.a.createElement(f, null, e.subreddit ? d.a.createElement(P, e) : d.a.createElement(I, null))), "Component", E.a)
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				d = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/components/ModHub/Content/index.m.less"),
				o = s.n(a);
			t.a = e => i.a.createElement("div", {
				className: o.a.noPermissions
			}, i.a.createElement("img", {
				className: o.a.rememberTheHuman,
				src: "".concat(r.a.assetPath, "/img/content-gate-icons/remember-the-human.png")
			}), e.isModerator ? Object(d.a)(e.language, "subredditModeration.modHub.incorrectPermissions") : Object(d.a)(e.language, "subredditModeration.modHub.modOnlyPage"), i.a.createElement("div", {
				className: o.a.noPermissionsSmallText
			}, e.isModerator ? Object(d.a)(e.language, "subredditModeration.modHub.incorrectPermissionsSubtext") : e.subredditDisplayText ? Object(d.a)(e.language, "subredditModeration.modHub.mustBeAModOfSubreddit", {
				subredditName: e.subredditDisplayText
			}) : Object(d.a)(e.language, "subredditModeration.modHub.mustBeAMod")))
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "CgYEK3BSwEitV3N5dS53Y",
				titleFontH2: "WtxSi4x3A6EHSYOlNO6dC",
				titleFontH3: "_1s8gRCw9ZEGeZdDLi4SjEs",
				titleFontH4: "iJgEN-DVO9xH1ING9PGia",
				titleFontH5: "_1Pk2HmstIcHsVCyXL0s7WR",
				titleFontH6: "_27G51xRMOXRk6p8hF2iFF4",
				metadataFont: "_3qFnOmsyfNVU4dOg-nT7AH",
				flairFont: "IHVtmv3d9vjFTy7sOv4nb",
				labelsFont: "_3veeqeCCuB-y_5Uz7aZwNo",
				actionFont: "_2GGs_1qJNsgRTBkJjB3JyV",
				smallButtonFont: "_1wMkSw4TKFwpURuJjoijc8",
				largeButtonFont: "_37n4mei_IKI2b0S9cUN6kj",
				tabFont: "_2uzD_ZiaRuda1gPntdeFV-",
				strongTextFont: "_3iiIycx9Jvd-wtbZRRlyrS",
				extraSmallFont: "ZVMudqNfA5HZ3QWDGW-rq",
				bodyFontH1: "_18F7ywSczMXfDxvUzIkKou",
				bodyFontH2: "_2gpSS7qXgM9-crN9KgQr_O",
				bodyFontH3: "-JM-6-h-SOMTCi9a5ZG0g",
				bodyFontH4: "_3ZVYgWzZxJjL_cahDG32l",
				bodyFontH5: "_15iJEJUM-il2Ud09a9yqhY",
				bodyFontH6: "_2kFIrTxjdWaprwQ9leev5x",
				bodyFont: "_38q9ZzND20FKMoX8BeB0u8",
				bodyFontSmall: "_1tFfFAHeLftmld2a2M4yIs",
				bodyFontMono: "_1N1SJCd40K_9LeW3MSWULf",
				rememberTheHuman: "_2S6IM2TPtTriI4r_2Op1Od",
				noPermissions: "_3jaCG74Q3u55JqGJy3u664",
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu"
			}
		},
		"./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less": function(e, t, s) {
			e.exports = {
				modalMain: "_3TbrCaPQ_Ciq0W4JtRYgHR",
				modIcon: "_3QZVX2_MD7fnyaRbQVH7LG",
				modalBody: "IdgjnohCE075Y2bzY7kGD",
				modalTitle: "_1uJCbZDn510LJ80M7oIUiM",
				modalDescription: "_2txvYfpiVxk7MM45Ybezvj",
				feedDetailsHeader: "_1oHK5eWnpY1WTbgUlHAPGn",
				feedDetailsTitle: "r07hBWYi9sVEcAGnnrnbt",
				feedDetailsDescription: "_3od74XOi7ZCYUaElRDtJY4",
				loadingBar: "oMm7a2SmYiOmS3c_HeyVY",
				gradientAnimation: "_2TjoHmGKn7BjeBAEpBRL3T"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_3w9CCp15Dn8xjuhR8VUE5n",
				hideButton: "_34rIurg3vPxO_tswAxt4wf",
				errorText: "dHzfi1tqA9d2uJEemybvK"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less": function(e, t, s) {
			e.exports = {
				row: "_3iC2jdvm0i0Q7HlrFJVoTC",
				iconStyles: "_9A1gbtA8zl5gRftEuuKPP",
				subredditIcon: "_327j3YarD5xmiCuu19J-XN",
				planetIcon: "_3RdGW7gz6XoGZ6oEgqKAVr",
				label: "_36BB5D1byWMjvVdrjUdv2",
				unhideButton: "iV4R5u2BbUz2dioFJNTAz",
				SubredditIcon: "_327j3YarD5xmiCuu19J-XN"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less": function(e, t, s) {
			e.exports = {
				rows: "_1q1k1QSwlFELkqmvELqzPI",
				noRows: "_2bMntgRcO2XGi6Tfep4QfV"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_25Nja5fbb_ZBbGBf8Bm2jO",
				hideCommunitiesHeader: "_2UuftU5L-0PE5_qTvLLSuB",
				inputContainer: "_16VxD_GKhjj0Mvr4ayqcAO",
				tertiaryButton: "_3KQk5TlvMCuZJm3Xc1Mk6L"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, s) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, s) {
			e.exports = {
				CommunityCount: "_2FGPtEJLumoHbu-QFFxout",
				communityCount: "_2FGPtEJLumoHbu-QFFxout",
				SubredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				subredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				SidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				sidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				ModalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq",
				modalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/i18n/components.tsx"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				p = s.n(b),
				g = s("./src/lib/lessComponent.tsx");
			const E = g.a.wrapped(u.b, "SubredditIcon", p.a),
				h = g.a.span("Label", p.a),
				x = Object(c.c)({
					subredditOrProfile: m.J
				});
			var _ = Object(l.b)(x)(e => {
				let {
					children: t,
					subredditOrProfile: s
				} = e;
				return t(s, i.a.createElement(i.a.Fragment, null, i.a.createElement(E, {
					subredditOrProfile: s
				}), i.a.createElement(h, null, s.displayText)))
			});
			var f = e => {
					let {
						children: t,
						className: s,
						subredditsOrProfilesIds: r
					} = e;
					const n = r.map(e => i.a.createElement(_, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return i.a.createElement("div", {
						className: s
					}, n)
				},
				S = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				O = s.n(S);
			s.d(t, "a", (function() {
				return y
			}));
			const M = g.a.div("CommunityCount", O.a),
				C = g.a.wrapped(f, "SubredditsOrProfiles", O.a),
				y = g.a.wrapped(d.a, "SidebarSubreddit", O.a),
				j = g.a.wrapped(d.a, "ModalSubreddit", O.a);
			var P;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(P || (P = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: s,
					language: n,
					onSeeMoreDetails: d,
					subredditCategory: l
				} = e, c = t ? y : j, u = s.length, m = t && s.length > 4;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(M, null, u > 0 ? Object(a.b)(n, "multireddit.info.communityCount", u, {
					object: Object(a.a)(n, l ? "multireddit.info.category" : "multireddit.info.multi")
				}) : Object(a.a)(n, "multireddit.empty")), u > 0 && i.a.createElement(C, {
					subredditsOrProfilesIds: t ? s.slice(0, 4) : s
				}, (t, s) => i.a.createElement(c, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, s)), u > 0 && m && i.a.createElement(o.n, {
					onClick: d
				}, i.a.createElement(r.c, null, "See more")))
			}
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var r = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				m = s("./src/reddit/actions/pages/modListing/index.ts"),
				b = s("./src/reddit/components/EmptySubreddit.tsx"),
				p = s("./src/reddit/components/JumpToContent/index.tsx"),
				g = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				E = s("./src/reddit/components/ListingPostList/index.tsx"),
				h = s("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				x = s("./src/reddit/i18n/utils.ts"),
				_ = s("./src/higherOrderComponents/asModal/index.tsx"),
				f = s("./src/reddit/i18n/components.tsx"),
				S = s("./src/reddit/actions/modal.ts"),
				O = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				M = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				C = s("./src/reddit/controls/TextButton/index.tsx"),
				y = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				j = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				P = s("./src/reddit/selectors/activeModalId.ts"),
				I = s("./src/reddit/selectors/modQueue.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				v = s.n(L);
			const H = Object(_.a)(e => d.a.createElement(O.c, {
					className: v.a.modalBody
				}, d.a.createElement(O.g, null, d.a.createElement(j.a, null, d.a.createElement(O.n, {
					className: v.a.modalTitle
				}, d.a.createElement(y.a, {
					className: v.a.modIcon
				}), d.a.createElement(f.c, null, "r/Mod")), d.a.createElement(C.a, {
					onClick: e.onCloseModal
				}, d.a.createElement(O.b, null)))), d.a.createElement(O.j, {
					className: v.a.modalMain
				}, d.a.createElement("div", {
					className: v.a.modalDescription
				}, d.a.createElement(f.c, null, "This is a feed for the communities that you moderate.")), d.a.createElement(M.b, {
					isSidebar: !1,
					language: e.language,
					subredditsOrProfilesIds: e.moderatedCommunitiesIds
				})))),
				F = e => d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
					className: v.a.feedDetailsTitle
				}, d.a.createElement(y.a, {
					className: v.a.modIcon
				}), d.a.createElement(f.c, null, "r/Mod")), d.a.createElement("div", {
					className: v.a.feedDetailsDescription
				}, d.a.createElement(f.c, null, "This is a feed for the communities that you moderate.")), e.moderatedCommunitiesIds.length ? d.a.createElement(M.b, {
					isSidebar: !0,
					language: e.language,
					onSeeMoreDetails: e.onSeeMoreDetails,
					subredditsOrProfilesIds: e.moderatedCommunitiesIds
				}) : d.a.createElement("div", {
					className: v.a.loadingBar
				})),
				T = Object(o.c)({
					isModalOpen: Object(P.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
					language: N.O,
					moderatedCommunitiesIds: I.f
				});
			var w = Object(a.b)(T, (e, t) => {
					let {} = t;
					return {
						toggleModal: () => e(Object(S.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
					}
				})(e => {
					const {
						isModalOpen: t,
						language: s,
						moderatedCommunitiesIds: r,
						toggleModal: n
					} = e;
					return r ? d.a.createElement(d.a.Fragment, null, d.a.createElement(F, {
						language: s,
						moderatedCommunitiesIds: r,
						onSeeMoreDetails: n
					}), t && d.a.createElement(H, {
						language: s,
						moderatedCommunitiesIds: r,
						onCloseModal: n,
						onOverlayClick: n,
						withOverlay: !0
					})) : null
				}),
				k = s("./node_modules/react-router-redux/es/index.js"),
				D = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				K = s("./src/reddit/controls/Button/index.tsx");
			const A = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				G = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				R = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var V = s("./src/reddit/routes/modListing/index.ts");
			const J = e => e.modListingPage.filteredSubreddits.api.pending;
			var q = s("./src/reddit/constants/keycodes.ts"),
				Y = s("./src/reddit/layout/row/Inline/index.tsx"),
				Z = s("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				W = s.n(Z);
			const Q = Object(o.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: J
			});
			class U extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditInput: ""
					}, this.clearSubredditInput = () => {
						this.setSubredditInput("")
					}, this.setSubredditInput = e => {
						this.setState({
							subredditInput: e
						})
					}, this.submitInput = () => {
						this.canSubmitInput() && (this.props.sendEvent(A()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === q.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(Y.a, null, d.a.createElement("input", {
						className: W.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: Object(x.c)("r/community"),
						value: this.state.subredditInput
					}), d.a.createElement(K.f, {
						"aria-label": Object(x.c)("Hide"),
						className: W.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, d.a.createElement(f.c, null, "Hide"))), e.apiError && e.apiError.explanation && d.a.createElement("div", {
						className: W.a.errorText
					}, e.apiError.explanation))
				}
			}
			var X = Object(a.b)(Q, e => ({
					hide: t => e(Object(m.a)(t))
				}))(Object(D.c)(U)),
				z = s("./src/lib/lessComponent.tsx"),
				$ = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ee = s("./src/lib/classNames/index.ts"),
				te = s("./src/reddit/icons/fonts/helpers.tsx");
			var se = e => d.a.createElement("i", {
					className: Object(ee.a)(Object(te.b)("clear"), e.className)
				}),
				re = s("./src/reddit/selectors/profile.ts"),
				ne = s("./src/reddit/selectors/subreddit.ts"),
				ie = s("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				de = s.n(ie);
			const ae = z.a.wrapped($.b, "SubredditIcon", de.a),
				oe = Object(o.c)({
					isApiPending: J,
					subredditOrProfile: (e, t) => {
						const s = Object(ne.y)(e, {
							subredditName: t.subredditName
						});
						if (!s) {
							const s = (e => e.startsWith(l.Ub) ? e.slice(2) : e)(t.subredditName);
							return s && Object(re.j)(e, {
								profileName: s
							}) || null
						}
						return s
					}
				});
			class le extends d.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(G()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? d.a.createElement(M.a, {
						className: de.a.row,
						to: e.subredditOrProfile.url
					}, d.a.createElement(ae, {
						subredditOrProfile: e.subredditOrProfile
					}), d.a.createElement("span", {
						className: de.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && d.a.createElement("button", {
						"aria-label": Object(x.c)("Unhide"),
						className: de.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, d.a.createElement(se, null))) : null
				}
			}
			var ce = Object(a.b)(oe, e => ({
					unhide: t => e(Object(m.d)(t))
				}))(Object(D.c)(le)),
				ue = s("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				me = s.n(ue);
			const {
				fbt: be
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var pe = e => {
					let {
						hiddenSubredditsNames: t
					} = e;
					const s = t.map(e => d.a.createElement(ce, {
						key: e,
						subredditName: e
					}));
					return d.a.createElement(d.a.Fragment, null, t.length ? d.a.createElement("div", {
						className: me.a.rows
					}, s) : d.a.createElement("div", {
						className: me.a.noRows
					}, be._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				ge = s("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				Ee = s.n(ge);
			const he = Object(B.t)({
					filtered: e => !!e && Object(V.d)(e.url)
				}),
				xe = Object(o.c)({
					hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
				});
			class _e extends d.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(R(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return d.a.createElement("div", {
						className: Ee.a.container
					}, d.a.createElement("div", {
						className: Ee.a.hideCommunitiesHeader
					}, d.a.createElement(f.c, null, "Hide communities")), d.a.createElement(K.n, {
						className: Ee.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? d.a.createElement(f.c, null, "Go to unfiltered r/Mods") : d.a.createElement(f.c, null, "Go to filtered r/Mod")), e.filtered && d.a.createElement("div", {
						className: Ee.a.inputContainer
					}, d.a.createElement(X, null), d.a.createElement(pe, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var fe = he(Object(a.b)(xe, (e, t) => {
					let {
						filtered: s
					} = t;
					return {
						toggleFiltered: () => e(Object(k.b)(s ? V.a : V.b))
					}
				})(Object(D.c)(_e))),
				Se = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Oe = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Me = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var Ce = () => d.a.createElement(Se.a, null, d.a.createElement(Me.a, {
					title: Object(x.c)("Feed details")
				}, d.a.createElement(w, null), d.a.createElement(fe, null)), d.a.createElement(Oe.a, null)),
				ye = s("./src/reddit/constants/page.ts"),
				je = s("./src/reddit/constants/parameters.ts"),
				Pe = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ie = s("./src/reddit/layout/page/Listing/index.tsx"),
				Ne = s("./src/reddit/selectors/moderatorPermissions.ts");
			const Le = Object(o.a)((e, t) => {
					let {
						location: s
					} = t;
					return s.search
				}, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort || l.P.HOT
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(V.d)(s.path)
				}, Ne.h, Ne.c, N.O, (e, t, s, r, i, d) => {
					const a = n()([...Object(c.a)(e)]),
						o = je.t in a && a[je.t].toUpperCase(),
						m = "string" == typeof o && o in l.Sb ? l.Sb[o] : l.Tb,
						b = s ? ye.e : ye.d;
					return {
						filtered: s,
						isModerator: r,
						isModeratorWithPostPerms: i,
						language: d,
						listingKey: Object(u.a)(b, t, a),
						listingName: b,
						sort: t,
						timeSort: m
					}
				}),
				ve = Object(a.b)(Le, (e, t) => ({
					onLoadMorePosts: () => e(m.c({
						sort: t.match.params.sort
					}))
				}));
			class He extends d.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Pe.d)(this.props.listingKey, this.props.sort, t, e), this.renderEmptySubreddit = () => d.a.createElement(b.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? V.b : V.a;
					return d.a.createElement("div", null, this.props.isModeratorWithPostPerms ? d.a.createElement(Ie.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: d.a.createElement(g.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}),
						content: d.a.createElement(d.a.Fragment, null, d.a.createElement(p.a, null), d.a.createElement(E.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: d.a.createElement(Ce, null)
					}) : d.a.createElement(h.a, {
						language: this.props.language,
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = ve(He)
		}
	}
]);
//# sourceMappingURL=ModListing.ead5dc77d368f1a5b619.js.map