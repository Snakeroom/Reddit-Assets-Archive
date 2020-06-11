// https://www.redditstatic.com/desktop2x/ModListing.40e572dc083285281aa8.js
// Retrieved at 6/11/2020, 1:30:09 PM by Reddit Dataminer v1.0.0
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
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/upperFirst.js"),
				i = s.n(n),
				o = s("./node_modules/react/index.js"),
				d = s.n(o),
				a = s("./src/config.ts"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/isFakeSubreddit/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/components/PostList/Placeholder.tsx"),
				p = s("./src/reddit/components/EmptySubreddit.m.less"),
				h = s.n(p),
				_ = s("./src/lib/lessComponent.tsx");
			const f = _.a.div("PrimaryText", h.a),
				g = _.a.div("SecondaryText", h.a),
				x = _.a.div("MainContentWrapper", h.a),
				E = _.a.div("MainContent", h.a),
				S = _.a.wrapped(b.a, "BackgroundPlaceholder", h.a),
				C = _.a.wrapped(m.h, "SubmitLink", h.a),
				M = _.a.img("SnooImg", h.a),
				y = _.a.div("EmptyHomepage", h.a),
				O = e => {
					switch (e) {
						case l.N.RISING:
							return r.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case l.N.TOP:
						case l.N.CONTROVERSIAL:
							return null;
						default:
							return r.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				I = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const n = O(s);
					return d.a.createElement(E, null, d.a.createElement(f, null, (e => {
						switch (e) {
							case l.N.RISING:
								return r.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case l.N.TOP:
							case l.N.CONTROVERSIAL:
								return r.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [r.fbt._param("listing sort option", i()(e))], {
									hk: "48BeCW"
								});
							default:
								return r.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(s)), t && !Object(c.a)(t) && !!n && d.a.createElement(d.a.Fragment, null, d.a.createElement(g, null, O(s)), d.a.createElement(C, {
						to: "/r/".concat(t, "/submit")
					}, r.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				P = () => d.a.createElement(E, null, d.a.createElement(M, {
					src: "".concat(a.a.assetPath, "/img/snoo_discovery@1x.png")
				}), d.a.createElement(f, null, r.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), d.a.createElement(C, {
					to: "/r/popular"
				}, r.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = _.a.wrapped(e => d.a.createElement(y, null, d.a.createElement(S, {
				isLoading: !1,
				layout: u.g.Classic
			}), d.a.createElement(x, null, e.subreddit ? d.a.createElement(I, e) : d.a.createElement(P, null))), "Component", h.a)
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				d = s("./src/reddit/components/ModHub/Content/index.m.less"),
				a = s.n(d);
			t.a = e => o.a.createElement("div", {
				className: a.a.noPermissions
			}, o.a.createElement("img", {
				className: a.a.rememberTheHuman,
				src: "".concat(r.a.assetPath, "/img/content-gate-icons/remember-the-human.png")
			}), e.isModerator ? n.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
				hk: "4wUDIF"
			}) : n.fbt._("Sorry, this is a moderator-only page", null, {
				hk: "2BZEIA"
			}), o.a.createElement("div", {
				className: a.a.noPermissionsSmallText
			}, e.isModerator ? n.fbt._("You need to change your mod permissions to view this page", null, {
				hk: "RS9sd"
			}) : e.subredditDisplayText ? n.fbt._("You must be a moderator of {subredditName} to view this page", [n.fbt._param("subredditName", e.subredditDisplayText)], {
				hk: "8eU68"
			}) : n.fbt._("You must be a moderator to view this page", null, {
				hk: "2N7TXH"
			})))
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
			s.d(t, "a", (function() {
				return y
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				b = s.n(m),
				p = s("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(c.b, "SubredditIcon", b.a),
				_ = p.a.span("Label", b.a),
				f = Object(l.c)({
					subredditOrProfile: u.K
				});
			var g = Object(a.b)(f)(e => {
				let {
					children: t,
					subredditOrProfile: s
				} = e;
				return t(s, i.a.createElement(i.a.Fragment, null, i.a.createElement(h, {
					subredditOrProfile: s
				}), i.a.createElement(_, null, s.displayText)))
			});
			var x = e => {
					let {
						children: t,
						className: s,
						subredditsOrProfilesIds: r
					} = e;
					const n = r.map(e => i.a.createElement(g, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return i.a.createElement("div", {
						className: s
					}, n)
				},
				E = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				S = s.n(E);
			const C = p.a.div("CommunityCount", S.a),
				M = p.a.wrapped(x, "SubredditsOrProfiles", S.a),
				y = p.a.wrapped(o.a, "SidebarSubreddit", S.a),
				O = p.a.wrapped(o.a, "ModalSubreddit", S.a);
			var I;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(I || (I = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: s,
					onSeeMoreDetails: n,
					subredditCategory: o = {
						name: r.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? y : O, l = s.length, c = t && s.length > 4;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(C, null, r.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [r.fbt._plural(l, "number"), r.fbt._param("category", o.name)], {
					hk: "33iWe4"
				})), l > 0 && i.a.createElement(M, {
					subredditsOrProfilesIds: t ? s.slice(0, 4) : s
				}, (t, s) => i.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, s)), l > 0 && c && i.a.createElement(d.n, {
					onClick: n
				}, r.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var r = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				m = s("./src/reddit/actions/pages/modListing/index.ts"),
				b = s("./src/reddit/components/EmptySubreddit.tsx"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				h = s("./src/reddit/components/JumpToContent/index.tsx"),
				_ = s("./src/reddit/components/ListingPostList/index.tsx"),
				f = s("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/higherOrderComponents/asModal/index.tsx"),
				E = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				C = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				M = s("./src/reddit/controls/TextButton/index.tsx"),
				y = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				O = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				I = s("./src/reddit/selectors/activeModalId.ts"),
				P = s("./src/reddit/selectors/modQueue.ts"),
				N = s("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				j = s.n(N);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), L = Object(x.a)(e => o.a.createElement(S.d, {
				className: j.a.modalBody
			}, o.a.createElement(S.h, null, o.a.createElement(O.a, null, o.a.createElement(S.p, {
				className: j.a.modalTitle
			}, o.a.createElement(y.a, {
				className: j.a.modIcon
			}), k._("r/Mod", null, {
				hk: "2a9ICx"
			})), o.a.createElement(M.a, {
				onClick: e.onCloseModal
			}, o.a.createElement(S.b, null)))), o.a.createElement(S.k, {
				className: j.a.modalMain
			}, o.a.createElement("div", {
				className: j.a.modalDescription
			}, k._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), o.a.createElement(C.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), v = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
				className: j.a.feedDetailsTitle
			}, o.a.createElement(y.a, {
				className: j.a.modIcon
			}), k._("r/Mod", null, {
				hk: "2a9ICx"
			})), o.a.createElement("div", {
				className: j.a.feedDetailsDescription
			}, k._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? o.a.createElement(C.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : o.a.createElement("div", {
				className: j.a.loadingBar
			})), F = Object(a.c)({
				isModalOpen: Object(I.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: P.f
			});
			var H = Object(d.b)(F, (e, t) => {
					let {} = t;
					return {
						toggleModal: () => e(Object(E.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
					}
				})(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: s,
						toggleModal: r
					} = e;
					return s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(v, {
						moderatedCommunitiesIds: s,
						onSeeMoreDetails: r
					}), t && o.a.createElement(L, {
						moderatedCommunitiesIds: s,
						onCloseModal: r,
						onOverlayClick: r,
						withOverlay: !0
					})) : null
				}),
				T = s("./node_modules/react-router-redux/es/index.js"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/controls/Button/index.tsx");
			const K = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				R = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				G = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var V = s("./src/reddit/routes/modListing/index.ts");
			const A = e => e.modListingPage.filteredSubreddits.api.pending;
			var Y = s("./src/reddit/constants/keycodes.ts"),
				J = s("./src/reddit/layout/row/Inline/index.tsx"),
				q = s("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				Q = s.n(q);
			const W = Object(a.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: A
			});
			class Z extends o.a.Component {
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
						this.canSubmitInput() && (this.props.sendEvent(K()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === Y.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(J.a, null, o.a.createElement("input", {
						className: Q.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: g.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), o.a.createElement(D.f, {
						"aria-label": g.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: Q.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, g.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && o.a.createElement("div", {
						className: Q.a.errorText
					}, e.apiError.explanation))
				}
			}
			var U = Object(d.b)(W, e => ({
					hide: t => e(Object(m.a)(t))
				}))(Object(w.c)(Z)),
				X = s("./src/lib/lessComponent.tsx"),
				z = s("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = s("./src/lib/classNames/index.ts"),
				ee = s("./src/reddit/icons/fonts/helpers.tsx");
			var te = e => o.a.createElement("i", {
					className: Object($.a)(Object(ee.b)("clear"), e.className)
				}),
				se = s("./src/reddit/selectors/profile.ts"),
				re = s("./src/reddit/selectors/subreddit.ts"),
				ne = s("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				ie = s.n(ne);
			const oe = X.a.wrapped(z.b, "SubredditIcon", ie.a),
				de = Object(a.c)({
					isApiPending: A,
					subredditOrProfile: (e, t) => {
						const s = Object(re.z)(e, {
							subredditName: t.subredditName
						});
						if (!s) {
							const s = (e => e.startsWith(l.Sb) ? e.slice(2) : e)(t.subredditName);
							return s && Object(se.j)(e, {
								profileName: s
							}) || null
						}
						return s
					}
				});
			class ae extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(R()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? o.a.createElement(C.a, {
						className: ie.a.row,
						to: e.subredditOrProfile.url
					}, o.a.createElement(oe, {
						subredditOrProfile: e.subredditOrProfile
					}), o.a.createElement("span", {
						className: ie.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && o.a.createElement("button", {
						"aria-label": g.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: ie.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, o.a.createElement(te, null))) : null
				}
			}
			var le = Object(d.b)(de, e => ({
					unhide: t => e(Object(m.d)(t))
				}))(Object(w.c)(ae)),
				ce = s("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				ue = s.n(ce);
			const {
				fbt: me
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var be = e => {
					let {
						hiddenSubredditsNames: t
					} = e;
					const s = t.map(e => o.a.createElement(le, {
						key: e,
						subredditName: e
					}));
					return o.a.createElement(o.a.Fragment, null, t.length ? o.a.createElement("div", {
						className: ue.a.rows
					}, s) : o.a.createElement("div", {
						className: ue.a.noRows
					}, me._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				pe = s("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				he = s.n(pe);
			const {
				fbt: _e
			} = s("./node_modules/fbt/lib/FbtPublic.js"), fe = Object(B.t)({
				filtered: e => !!e && Object(V.d)(e.url)
			}), ge = Object(a.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class xe extends o.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(G(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement("div", {
						className: he.a.container
					}, o.a.createElement("div", {
						className: he.a.hideCommunitiesHeader
					}, _e._("Hide communities", null, {
						hk: "15OtHo"
					})), o.a.createElement(D.n, {
						className: he.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? _e._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : _e._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && o.a.createElement("div", {
						className: he.a.inputContainer
					}, o.a.createElement(U, null), o.a.createElement(be, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var Ee = fe(Object(d.b)(ge, (e, t) => {
					let {
						filtered: s
					} = t;
					return {
						toggleFiltered: () => e(Object(T.b)(s ? V.a : V.b))
					}
				})(Object(w.c)(xe))),
				Se = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Ce = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Me = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var ye = () => o.a.createElement(Se.a, null, o.a.createElement(Me.a, {
					title: g.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, o.a.createElement(H, null), o.a.createElement(Ee, null)), o.a.createElement(Ce.a, null)),
				Oe = s("./src/reddit/constants/page.ts"),
				Ie = s("./src/reddit/constants/parameters.ts"),
				Pe = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ne = s("./src/reddit/layout/page/Listing/index.tsx"),
				je = s("./src/reddit/selectors/moderatorPermissions.ts");
			const ke = Object(a.a)((e, t) => {
					let {
						location: s
					} = t;
					return s.search
				}, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort || l.N.HOT
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(V.d)(s.path)
				}, je.h, je.c, (e, t, s, r, i) => {
					const o = n()([...Object(c.a)(e)]),
						d = Ie.t in o && o[Ie.t].toUpperCase(),
						a = "string" == typeof d && d in l.Qb ? l.Qb[d] : l.Rb,
						m = s ? Oe.e : Oe.d;
					return {
						filtered: s,
						isModerator: r,
						isModeratorWithPostPerms: i,
						listingKey: Object(u.a)(m, t, o),
						listingName: m,
						sort: t,
						timeSort: a
					}
				}),
				Le = Object(d.b)(ke, (e, t) => ({
					onLoadMorePosts: () => e(m.c({
						sort: t.match.params.sort
					}))
				}));
			class ve extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Pe.e)(this.props.listingKey, this.props.sort, t, e), this.renderEmptySubreddit = () => o.a.createElement(b.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? V.b : V.a;
					return o.a.createElement("div", null, this.props.isModeratorWithPostPerms ? o.a.createElement(Ne.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(p.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), o.a.createElement(h.a, null), o.a.createElement(_.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: o.a.createElement(ye, null)
					}) : o.a.createElement(f.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = Le(ve)
		}
	}
]);
//# sourceMappingURL=ModListing.40e572dc083285281aa8.js.map