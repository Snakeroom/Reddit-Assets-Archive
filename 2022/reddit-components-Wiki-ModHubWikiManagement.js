// https://www.redditstatic.com/desktop2x/reddit-components-Wiki-ModHubWikiManagement.9f0f7fb04c4618895a72.js
// Retrieved at 10/18/2022, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Wiki-ModHubWikiManagement"], {
		"./src/reddit/components/BannedUserList/AddBannedUserModal/DaysInput.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				c = n("./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.m.less"),
				u = n.n(c);
			const m = o.a.div("BanLength", u.a),
				h = o.a.wrapped(d.p, "BanLengthDays", u.a),
				b = o.a.wrapped(d.j, "NumberInput", u.a),
				p = o.a.div("StyledPermanentLabel", u.a),
				g = o.a.div("DescriptionText", u.a),
				k = o.a.div("BanLengthContainer", u.a),
				C = o.a.div("CheckboxWrapper", u.a),
				E = o.a.div("PermanentCheckbox", u.a);
			t.a = e => r.a.createElement(d.h, null, r.a.createElement(d.k, null, i.fbt._("How long?", null, {
				hk: "1InKw6"
			})), r.a.createElement(k, null, r.a.createElement(m, {
				className: Object(a.a)({
					[u.a.isDisabled]: e.isDurationPermanent
				})
			}, r.a.createElement(b, {
				tabIndex: 0,
				disabled: e.isDurationPermanent,
				onChange: e.onChangeDuration,
				min: "0",
				type: "number",
				value: void 0 !== e.duration && null !== e.duration ? e.duration : ""
			}), r.a.createElement(h, null, i.fbt._("Days", null, {
				hk: "2TkJg0"
			}))), r.a.createElement(p, {
				onClick: e.togglePermanent
			}, r.a.createElement(E, {
				onKeyDown: e.togglePermanent
			}, r.a.createElement(C, {
				tabIndex: 0
			}, e.isDurationPermanent ? r.a.createElement(l.b, null) : r.a.createElement(l.a, null))), r.a.createElement(g, null, i.fbt._("Permanent", null, {
				hk: "172B1w"
			})))))
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.m.less": function(e, t, n) {
			e.exports = {
				Container: "cCcS9FtX9EtCZndWE2KoT",
				container: "cCcS9FtX9EtCZndWE2KoT",
				Dropdown: "_2SggQ3MVXsSCJaJnZohv5W",
				dropdown: "_2SggQ3MVXsSCJaJnZohv5W",
				Row: "_2_cyr9JIpA0CtkJpzPGSMX",
				row: "_2_cyr9JIpA0CtkJpzPGSMX",
				dropdownTarget: "_16JYr1_9yGQHSLHdyiWlGz",
				targetText: "_2A6qbw0TmdARh8bjwQ2ofj",
				DropdownRow: "_2lfpXKpvpeZ4oyQ-CMp9Le",
				dropdownRow: "_2lfpXKpvpeZ4oyQ-CMp9Le"
			}
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				u = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.m.less"),
				b = n.n(h);
			const p = [() => i.fbt._("Spam", null, {
					hk: "1I8OLD"
				}), () => i.fbt._("Personal and confidential information", null, {
					hk: "gBQdH"
				}), () => i.fbt._("Threatening, harassing, or inciting violence", null, {
					hk: "2To19l"
				})],
				g = Object(o.c)({
					subredditRules: m.W
				}),
				k = Object(a.b)(g);
			class C extends r.a.Component {
				constructor(e) {
					super(e), this.api = null, this.closeDropdown = () => {
						this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.handleToggleDropdown = () => this.setState({
						isOpen: !this.state.isOpen
					}), this.handleSelectReason = (e, t) => {
						this.props.onSelectReason(t), e.key !== d.b.Tab && e.preventDefault(), this.closeDropdown()
					}, this.getRuleShortNames = () => {
						return [...this.props.subredditRules ? this.props.subredditRules.map(e => e.shortName) : [], ...p.map(e => e().toString()), "other"]
					}, this.state = {
						isOpen: !1,
						activeRow: -1
					}, this.api = {
						closeDropdown: this.closeDropdown
					}
				}
				componentDidMount() {
					this.props.onDropdownApi && this.props.onDropdownApi(this.api)
				}
				UNSAFE_componentWillMount() {
					this.props.onDropdownApi && this.props.onDropdownApi(null)
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement("div", {
						className: b.a.Container
					}, r.a.createElement("button", {
						className: b.a.dropdownTarget,
						onClick: this.handleToggleDropdown
					}, r.a.createElement("div", {
						className: b.a.targetText
					}, e.reason || i.fbt._("None", null, {
						hk: "1IYbYO"
					})), r.a.createElement(u.b, null)), t.isOpen && r.a.createElement(l.a, {
						className: b.a.Dropdown,
						isOverlay: !0
					}, this.getRuleShortNames().map((t, n) => r.a.createElement(c.b, {
						key: t,
						className: b.a.DropdownRow,
						displayText: t,
						index: n,
						isSelected: e.reason === t,
						onClick: e => this.handleSelectReason(e, t)
					}))))
				}
			}
			t.a = k(C)
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.m.less": function(e, t, n) {
			e.exports = {
				Unban: "_1MjK_ZbXYkYgjvnYRxXErB",
				unban: "_1MjK_ZbXYkYgjvnYRxXErB",
				UnbanButton: "yByd-IEj7iofnvyb9tmne",
				unbanButton: "yByd-IEj7iofnvyb9tmne",
				PrimaryButton: "EM-EsR6tL9UA_MTsXHtS0",
				primaryButton: "EM-EsR6tL9UA_MTsXHtS0",
				ModalText: "_2Y9SCHsLMT105713rB10IV",
				modalText: "_2Y9SCHsLMT105713rB10IV",
				BanLength: "_14KS1Rt4ecAeHrAVFStL2n",
				banLength: "_14KS1Rt4ecAeHrAVFStL2n",
				isDisabled: "_3FQWLp6TeLNW0P14RMTGUn",
				BanLengthDays: "_34HussaQod-Yr8UQii6_EM",
				banLengthDays: "_34HussaQod-Yr8UQii6_EM",
				NumberInput: "_2_hBB86aqyqySSaODRHCt8",
				numberInput: "_2_hBB86aqyqySSaODRHCt8",
				StyledPermanentLabel: "_28lH71X854yinMNr2pzLlV",
				styledPermanentLabel: "_28lH71X854yinMNr2pzLlV",
				DescriptionText: "_2qrQzheLoaZZVefsJXThbW",
				descriptionText: "_2qrQzheLoaZZVefsJXThbW",
				BanLengthContainer: "Wt-OAd3PRXDzyks4SeiTT",
				banLengthContainer: "Wt-OAd3PRXDzyks4SeiTT",
				Bullet: "LusCMd8yHS-4_9XlhZpDY",
				bullet: "LusCMd8yHS-4_9XlhZpDY",
				VisibilityNote: "_1znuUPndM3k-XpOdaInCRt",
				visibilityNote: "_1znuUPndM3k-XpOdaInCRt",
				PermanentCheckbox: "_2yikAT1fG9F2gljm8b0FM5",
				permanentCheckbox: "_2yikAT1fG9F2gljm8b0FM5",
				ModalFooter: "Zfyj5B049nkMNmpt2F4PK",
				modalFooter: "Zfyj5B049nkMNmpt2F4PK",
				FooterRow: "ayyLCu5N-CWR6bsdVNMwW",
				footerRow: "ayyLCu5N-CWR6bsdVNMwW",
				CheckboxWrapper: "_33C5Xe1t7nuSQoLX8Nkpay",
				checkboxWrapper: "_33C5Xe1t7nuSQoLX8Nkpay"
			}
		},
		"./src/reddit/components/Wiki/ModHubWikiManagement/ModHubWikiPage/index.m.less": function(e, t, n) {
			e.exports = {
				container: "mGNUz0KqvrWsrn1xlqXf_",
				pageContent: "_25IEQYEH40hsAC5r5LkR19"
			}
		},
		"./src/reddit/components/Wiki/ModHubWikiManagement/WikiBannedContributors/index.m.less": function(e, t, n) {
			e.exports = {
				primaryButton: "_2r3vT9CCyiwTgSeXf6RtHn"
			}
		},
		"./src/reddit/components/Wiki/ModHubWikiManagement/WikiContributors/index.m.less": function(e, t, n) {
			e.exports = {
				inputLabel: "_1nDjMIzhiCt7HWgRXFrc1R",
				primaryButton: "_3k1glSv6XSy5A0En7LZYHW"
			}
		},
		"./src/reddit/components/Wiki/ModHubWikiManagement/WikiPageSettings/index.m.less": function(e, t, n) {
			e.exports = {
				pageTitle: "_3K9b9vWaE9TuDvOHKsnpxZ",
				cancelButton: "tbuAQl_rbaDSz9IxcnXTR",
				alertBanner: "_3L8Gz5eTr8NgBeJTKk9kiI",
				alertIcon: "_3E4tZufYfJczm55lxiwRkQ",
				content: "Dt_lgwYyjEtbT77GZCi30",
				sectionTitle: "_3BWDhLBCtVqogIc3xGlpE7",
				radioOption: "bYPvzPxaH0T9q-tlg6PNB",
				checkboxInput: "_2TLP8aUCkEOCat2JwsRRRg",
				inputOptionText: "_2GRGQ2mqbZ8bQ7eYspBxAg",
				formGroup: "_1Z7vhGPbRejo38K3k8dTqe",
				contributorsForm: "_3CjUYMONOw114l3U1STBgv",
				contributorInput: "_32godwr0kHXTC5KEQCxyzM",
				addButton: "_3bNA4nqHfh47uG_lar-cr-",
				buttonRow: "_3PCi42qV44IhFfKgdv3ZMM",
				contributorRow: "_3PMSnq_s_rryQTVUy7P_Aa",
				removeButton: "_3kMtQQJGQZPLQhxTuHwe1e",
				loadingUserIcon: "_1Xt2gzEEN0ITln7Q9Vi7Gc",
				loadingUserName: "_2wDJm1c05PrtcJSjqQk6gI"
			}
		},
		"./src/reddit/components/Wiki/ModHubWikiManagement/index.m.less": function(e, t, n) {
			e.exports = {
				modHubTopBar: "_1ooZMJIDxapoXK4WpulOUj",
				modHubPageEditorContent: "_1uuCFa_ObMyUwixW3reghL"
			}
		},
		"./src/reddit/components/Wiki/ModHubWikiManagement/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				o = n("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				d = n("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				l = n("./src/reddit/constants/parameters.ts"),
				c = n("./src/reddit/constants/wiki.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/wiki/wikiRevision.ts"),
				h = n("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				b = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				p = n("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				g = n("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				k = n("./src/reddit/components/Wiki/ModHubWikiManagement/ModHubWikiPage/index.m.less"),
				C = n.n(k);

			function E(e) {
				const {
					wikiPageName: t,
					subredditName: n
				} = e;
				return i.createElement("div", {
					className: C.a.container
				}, i.createElement(b.c, null, i.createElement(g.a, {
					isModHub: !0,
					wikiPageName: t,
					subredditName: n
				})), i.createElement(p.a, {
					className: C.a.pageContent,
					isModHub: !0,
					subredditName: n,
					wikiPageName: t
				}))
			}
			var v = n("./src/config.ts"),
				S = n("./node_modules/fbt/lib/FbtPublic.js"),
				w = n("./node_modules/react-redux/es/index.js"),
				M = n("./node_modules/reselect/es/index.js"),
				x = n("./src/reddit/actions/modal.ts"),
				P = n("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				f = n("./src/reddit/components/BannedUserList/index.tsx"),
				_ = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				T = n("./src/reddit/components/HumanDate/index.tsx"),
				N = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				y = n("./src/reddit/components/Scroller/Simple.tsx"),
				B = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				R = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				W = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				j = n("./src/reddit/constants/componentSizes.ts"),
				D = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/helpers/trackers/subredditWiki.ts"),
				U = n("./src/reddit/selectors/activeModalId.ts"),
				A = n("./src/reddit/selectors/subredditWiki.ts"),
				I = n("./src/higherOrderComponents/asModal/index.tsx"),
				H = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				F = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				X = n("./src/reddit/controls/TextButton/index.tsx"),
				Q = n("./src/reddit/helpers/isValidUsername/index.tsx"),
				V = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				q = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				Z = n("./src/reddit/models/SubredditModeration/index.ts"),
				Y = n("./src/reddit/components/BannedUserList/AddBannedUserModal/DaysInput.tsx"),
				K = n("./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.tsx"),
				z = n("./src/reddit/components/Wiki/ModHubWikiManagement/WikiBannedContributors/index.m.less"),
				G = n.n(z);
			const J = 300,
				$ = Object(w.b)(null, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						addBannedWikiContributor: t => e(Object(P.a)(n, t))
					}
				});
			class ee extends s.a.Component {
				constructor(e) {
					super(e), this.onInputChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.onChangeModNote = e => {
						e.currentTarget.value.length <= J && this.setState({
							note: e.currentTarget.value
						})
					}, this.onSelectReason = e => {
						this.setState({
							banReason: e
						})
					}, this.onChangeBanDuration = e => {
						const t = Number(e.currentTarget.value);
						"number" == typeof t && (t < 0 || t > Z.b || this.setState({
							duration: t
						}))
					}, this.togglePermanent = e => {
						e.key && "Enter" !== e.key || this.setState({
							isDurationPermanent: !this.state.isDurationPermanent,
							duration: void 0
						})
					}, this.onSubmit = () => {
						const e = Object(V.a)(this.state.username),
							{
								note: t,
								banReason: n,
								isDurationPermanent: i,
								duration: s
							} = this.state;
						let r = i ? void 0 : s;
						const a = this.props.bannedUser && null != this.props.bannedUser.daysRemaining && this.props.bannedUser.daysRemaining === s;
						null != r && a && (r += 1), this.props.addBannedWikiContributor({
							note: t,
							username: e,
							banReason: n,
							duration: r
						}), this.props.sendEvent(L.a), this.props.toggleModal()
					}, this.state = {
						duration: e.bannedUser ? e.bannedUser.daysRemaining : void 0,
						isDurationPermanent: !e.bannedUser || !e.bannedUser.daysRemaining,
						note: e.bannedUser ? e.bannedUser.note : "",
						username: e.bannedUser ? e.bannedUser.username : ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement(F.e, null, s.a.createElement(F.i, null, s.a.createElement(q.a, null, s.a.createElement(F.q, null, S.fbt._("Ban wiki contributor", null, {
						hk: "1d5Hrk"
					}), e.bannedUser && `: u/${e.bannedUser.username}`), s.a.createElement(X.a, {
						onClick: e.toggleModal
					}, s.a.createElement(F.b, null)))), s.a.createElement(F.l, null, !e.bannedUser && s.a.createElement(s.a.Fragment, null, s.a.createElement(F.h, null, s.a.createElement(F.k, null, S.fbt._("Enter username", null, {
						hk: "2fknjy"
					})), s.a.createElement(F.j, {
						onChange: this.onInputChange,
						placeholder: S.fbt._("u/username", null, {
							hk: "RshBO"
						}),
						value: this.state.username
					})), s.a.createElement(F.h, null, s.a.createElement(F.k, null, S.fbt._("Reason for ban", null, {
						hk: "1e9gZn"
					})), s.a.createElement(K.a, {
						onSelectReason: this.onSelectReason,
						reason: t.banReason,
						subredditId: e.subredditId
					}))), s.a.createElement(F.h, null, s.a.createElement(F.k, null, S.fbt._("Mod note", null, {
						hk: "1IDrTK"
					})), s.a.createElement(F.j, {
						onChange: this.onChangeModNote,
						placeholder: S.fbt._("Mod note", null, {
							hk: "1dzUjv"
						}),
						value: t.note
					}), s.a.createElement(H.a, {
						maxChars: J,
						text: t.note
					})), s.a.createElement(Y.a, {
						duration: t.duration,
						isDurationPermanent: t.isDurationPermanent,
						onChangeDuration: this.onChangeBanDuration,
						togglePermanent: this.togglePermanent
					})), s.a.createElement(F.g, null, s.a.createElement(D.o, {
						onClick: e.toggleModal
					}, S.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(D.l, {
						className: G.a.primaryButton,
						onClick: this.onSubmit,
						disabled: !Object(Q.a)(t.username)
					}, S.fbt._("Ban user", null, {
						hk: "w8Nwk"
					}))))
				}
			}
			var te = Object(I.a)($(ee));
			const ne = Object(M.c)({
				isAddBannedContributorModalOpen: e => "WikiBannedContributers--BanContributorModal" === Object(U.a)(e),
				isConfirmModalOpen: e => "WikiBannedContributers--RemoveBannedWikiContributor" === Object(U.a)(e),
				isWikiBannedContributorsListPending: A.e,
				loadMoreToken: A.f,
				searchResult: A.g,
				wikiContributors: A.h
			});
			class ie extends s.a.Component {
				constructor(e) {
					super(e), this.onSearch = async e => {
						this.setState({
							isSearchPending: !0,
							searchTerm: e
						}), await this.props.searchWikiBannedContributorByName(e), this.setState({
							isSearchPending: !1
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: void 0
					}), this.onClickEditUser = e => {
						this.setState({
							userToEdit: e
						}), this.props.toggleAddBannedContributorModal()
					}, this.onCloseBannedContributorModal = () => {
						this.props.toggleAddBannedContributorModal(), this.setState({
							userToEdit: void 0
						})
					}, this.onClickRemove = e => {
						this.setState({
							userToRemove: e
						}), this.props.toggleConfirmModal()
					}, this.onRemoveContributor = () => {
						this.state.userToRemove && (this.props.removeWikiBannedContributor(this.state.userToRemove), this.props.sendEvent(L.h))
					}, this.onLoadMore = async () => {
						this.props.loadMoreToken && !this.state.isFetchMoreBannedContributorsPending && (this.setState({
							isFetchMoreBannedContributorsPending: !0
						}), await this.props.moreWikiBannedContributorsRequested(this.props.loadMoreToken), this.setState({
							isFetchMoreBannedContributorsPending: !1
						}))
					}, this.renderBannedContributor = e => {
						const t = this.props.wikiContributors.find(t => t.id === e);
						if (!t) return s.a.createElement(s.a.Fragment, null);
						const n = new Date(t.date),
							i = Object(f.b)(t.daysRemaining);
						return s.a.createElement(W.b, {
							description: t.note,
							username: t.username,
							userIcon: t.iconUrl,
							primaryButton: s.a.createElement("a", {
								href: `${v.a.redditUrl}/message/compose/?to=${t.username}`,
								rel: "noopener noreferrer",
								target: "_blank"
							}, s.a.createElement(D.r, null, S.fbt._("Send message", null, {
								hk: "21j5K5"
							}))),
							secondaryButton: s.a.createElement(D.r, {
								onClick: () => this.onClickEditUser(t)
							}, S.fbt._("Edit", null, {
								hk: "1nftDt"
							})),
							tertiaryButton: s.a.createElement(D.r, {
								onClick: () => this.onClickRemove(t.id)
							}, S.fbt._("Remove", null, {
								hk: "3tYl0U"
							})),
							timeAgo: s.a.createElement(s.a.Fragment, null, s.a.createElement(T.d, {
								seconds: n.valueOf()
							}), " (", i, ")"),
							key: t.id
						})
					}, this.renderNoContent = () => this.props.isWikiBannedContributorsListPending ? s.a.createElement(W.a, null) : s.a.createElement(N.c, {
						text: S.fbt._("No banned wiki contributors in {subredditName}", [S.fbt._param("subredditName", this.props.subredditName)], {
							hk: "x9Dwq"
						})
					}), this.renderSearchState = () => s.a.createElement(B.a, {
						cancelSearch: this.cancelSearch,
						noResultsFound: !this.props.searchResult,
						searchPending: this.state.isSearchPending,
						searchTerm: this.state.searchTerm || ""
					}, this.props.searchResult && this.renderBannedContributor(this.props.searchResult.id)), this.state = {
						isFetchMoreBannedContributorsPending: !1,
						isSearchPending: !1,
						searchTerm: ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(b.c, null, s.a.createElement(D.l, {
						onClick: this.props.toggleAddBannedContributorModal
					}, S.fbt._("Ban contributor", null, {
						hk: "1vQTTH"
					}))), s.a.createElement(b.a, null, s.a.createElement(b.b, null, S.fbt._("Banned wiki contributors", null, {
						hk: "338WU8"
					})), s.a.createElement(R.b, {
						activeSearchQuery: this.state.searchTerm,
						onSearch: this.onSearch
					}), e.wikiContributors.length ? t.searchTerm ? this.renderSearchState() : s.a.createElement(y.b, {
						loadMoreToken: e.loadMoreToken || void 0,
						onLoadMore: this.onLoadMore,
						viewportTopPadding: j.f + j.i
					}, e.wikiContributors.map(e => ({
						estHeight: 40,
						id: e.id,
						render: () => this.renderBannedContributor(e.id)
					}))) : this.renderNoContent(), t.isFetchMoreBannedContributorsPending && s.a.createElement(W.a, {
						rows: 3
					})), e.isAddBannedContributorModalOpen && s.a.createElement(te, {
						bannedUser: t.userToEdit,
						subredditId: e.subredditId,
						sendEvent: e.sendEvent,
						subredditName: e.subredditName,
						toggleModal: this.onCloseBannedContributorModal,
						withOverlay: !0
					}), t.userToRemove && e.isConfirmModalOpen && s.a.createElement(_.a, {
						actionText: S.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						headerText: S.fbt._("Remove banned wiki contributor?", null, {
							hk: "4E1qjp"
						}),
						modalText: S.fbt._("Do you wish to unban this user as a wiki contributor?", null, {
							hk: "2GrHZs"
						}),
						onConfirm: this.onRemoveContributor,
						toggleModal: this.props.toggleConfirmModal,
						withOverlay: !0
					}))
				}
			}
			var se = Object(w.b)(ne, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						moreWikiBannedContributorsRequested: t => e(Object(P.b)(n, t)),
						removeWikiBannedContributor: t => e(Object(P.c)(n, t)),
						searchWikiBannedContributorByName: t => e(Object(P.d)(n, t)),
						toggleAddBannedContributorModal: () => e(Object(x.i)("WikiBannedContributers--BanContributorModal")),
						toggleConfirmModal: () => e(Object(x.i)("WikiBannedContributers--RemoveBannedWikiContributor"))
					}
				})(Object(O.c)(ie)),
				re = n("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				ae = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				oe = n("./src/reddit/components/Wiki/ModHubWikiManagement/WikiContributors/index.m.less"),
				de = n.n(oe);
			const le = Object(w.b)(null, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					addWikiContributor: t => e(Object(re.a)(n, t))
				}
			});
			class ce extends s.a.Component {
				constructor(e) {
					super(e), this.onInputChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.onSubmit = () => {
						const e = Object(V.a)(this.state.username);
						this.props.addWikiContributor(e), this.props.sendEvent(L.b), this.props.toggleModal()
					}, this.state = {
						username: ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement(F.e, null, s.a.createElement(F.i, null, s.a.createElement(q.a, null, s.a.createElement(F.q, null, S.fbt._("Add wiki contributor", null, {
						hk: "4Df0lQ"
					})), s.a.createElement(X.a, {
						onClick: e.toggleModal
					}, s.a.createElement(F.b, null)))), s.a.createElement(F.l, null, s.a.createElement("div", {
						className: de.a.inputLabel
					}, S.fbt._("Enter username", null, {
						hk: "2NbD93"
					})), s.a.createElement(ae.d, {
						placeholder: S.fbt._("u/username", null, {
							hk: "38dqZm"
						}),
						onChange: this.onInputChange,
						value: this.state.username,
						autoFocus: !0
					})), s.a.createElement(F.g, null, s.a.createElement(D.o, {
						onClick: e.toggleModal
					}, S.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(D.l, {
						className: de.a.primaryButton,
						onClick: this.onSubmit,
						disabled: !Object(Q.a)(t.username)
					}, S.fbt._("Add user", null, {
						hk: "28WQQq"
					}))))
				}
			}
			var ue = Object(I.a)(le(ce));
			const me = Object(M.c)({
				isAddContributorModalOpen: e => "WikiContributers--AddContributorModal" === Object(U.a)(e),
				isConfirmModalOpen: e => "WikiContributers--RemoveContributor" === Object(U.a)(e),
				isWikiContributorsListPending: A.j,
				loadMoreToken: A.k,
				searchResult: A.l,
				wikiContributors: A.m
			});
			class he extends s.a.Component {
				constructor(e) {
					super(e), this.onSearch = async e => {
						this.setState({
							isSearchPending: !0,
							searchTerm: e
						}), await this.props.searchWikiContributorByName(e), this.setState({
							isSearchPending: !1
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: void 0
					}), this.onClickRemove = e => {
						this.setState({
							userToRemove: e
						}), this.props.toggleConfirmModal()
					}, this.onRemoveContributor = () => {
						this.state.userToRemove && (this.props.removeWikiContributor(this.state.userToRemove), this.props.sendEvent(L.i))
					}, this.onLoadMore = async () => {
						this.props.loadMoreToken && !this.state.isFetchMoreContributorsPending && (this.setState({
							isFetchMoreContributorsPending: !0
						}), await this.props.moreWikiContributorsRequested(this.props.loadMoreToken), this.setState({
							isFetchMoreContributorsPending: !1
						}))
					}, this.renderContributor = e => {
						const t = new Date(e.date);
						return s.a.createElement(W.b, {
							username: e.username,
							userIcon: e.iconUrl,
							primaryButton: s.a.createElement("a", {
								href: `${v.a.redditUrl}/message/compose/?to=${e.username}`,
								rel: "noopener noreferrer",
								target: "_blank"
							}, s.a.createElement(D.r, null, S.fbt._("Send message", null, {
								hk: "13WC98"
							}))),
							secondaryButton: s.a.createElement(D.r, {
								onClick: () => this.onClickRemove(e.id)
							}, S.fbt._("Remove", null, {
								hk: "3tYl0U"
							})),
							timeAgo: s.a.createElement(T.d, {
								seconds: t.valueOf()
							})
						})
					}, this.renderNoContent = () => this.props.isWikiContributorsListPending ? s.a.createElement(W.a, null) : s.a.createElement(N.c, {
						text: S.fbt._("No wiki contributors in {subredditName}", [S.fbt._param("subredditName", this.props.subredditName)], {
							hk: "37wxec"
						})
					}), this.renderSearchState = () => s.a.createElement(B.a, {
						cancelSearch: this.cancelSearch,
						noResultsFound: !this.props.searchResult,
						searchPending: this.state.isSearchPending,
						searchTerm: this.state.searchTerm || ""
					}, this.props.searchResult && this.renderContributor(this.props.searchResult)), this.state = {
						isFetchMoreContributorsPending: !1,
						isSearchPending: !1,
						searchTerm: "",
						userToRemove: void 0
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(b.c, null, s.a.createElement(D.l, {
						onClick: this.props.toggleAddContributorModal
					}, S.fbt._("Add contributor", null, {
						hk: "4v9hcQ"
					}))), s.a.createElement(b.a, null, s.a.createElement(b.b, null, S.fbt._("Added wiki contributors", null, {
						hk: "4FzyZs"
					})), s.a.createElement(R.b, {
						activeSearchQuery: this.state.searchTerm,
						onSearch: this.onSearch
					}), e.wikiContributors.length ? t.searchTerm ? this.renderSearchState() : s.a.createElement(y.b, {
						loadMoreToken: e.loadMoreToken || void 0,
						onLoadMore: this.onLoadMore,
						viewportTopPadding: j.f + j.i
					}, e.wikiContributors.map(e => ({
						estHeight: 40,
						id: e.id,
						render: () => this.renderContributor(e)
					}))) : this.renderNoContent(), t.isFetchMoreContributorsPending && s.a.createElement(W.a, {
						rows: 3
					})), e.isAddContributorModalOpen && s.a.createElement(ue, {
						sendEvent: e.sendEvent,
						subredditName: e.subredditName,
						toggleModal: e.toggleAddContributorModal,
						withOverlay: !0
					}), t.userToRemove && e.isConfirmModalOpen && s.a.createElement(_.a, {
						actionText: S.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						headerText: S.fbt._("Remove wiki contributor?", null, {
							hk: "kQXBL"
						}),
						modalText: S.fbt._("Do you wish to remove this user as a wiki contributor?", null, {
							hk: "2HhSjH"
						}),
						onConfirm: this.onRemoveContributor,
						toggleModal: this.props.toggleConfirmModal,
						withOverlay: !0
					}))
				}
			}
			var be = Object(w.b)(me, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						moreWikiContributorsRequested: t => e(Object(re.b)(n, t)),
						removeWikiContributor: t => e(Object(re.c)(n, t)),
						searchWikiContributorByName: t => e(Object(re.d)(n, t)),
						toggleAddContributorModal: () => e(Object(x.i)("WikiContributers--AddContributorModal")),
						toggleConfirmModal: () => e(Object(x.i)("WikiContributers--RemoveContributor"))
					}
				})(Object(O.c)(he)),
				pe = n("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				ge = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				ke = n("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				Ce = n("./src/reddit/constants/colors.ts"),
				Ee = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				ve = n("./src/reddit/controls/RadioInput/index.tsx"),
				Se = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				we = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				Me = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				xe = n("./src/reddit/selectors/subreddit.ts"),
				Pe = n("./node_modules/lodash/noop.js"),
				fe = n.n(Pe),
				_e = n("./node_modules/lodash/times.js"),
				Te = n.n(_e),
				Ne = n("./src/lib/classNames/index.ts"),
				ye = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				Be = n("./src/reddit/constants/keycodes.ts"),
				Re = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				We = n("./src/reddit/components/Wiki/ModHubWikiManagement/WikiPageSettings/index.m.less"),
				Oe = n.n(We);
			const je = Object(M.c)({
					isConfirmModalOpen: e => "WikiPageSettings--RemoveContributor" === Object(U.a)(e)
				}),
				De = Object(w.b)(je, (e, t) => {
					let {
						subredditName: n,
						wikiPageName: i
					} = t;
					return {
						addWikiPageContributor: t => e(Object(pe.a)({
							username: t,
							wikiPageName: i,
							subredditName: n
						})),
						fetchMoreWikiPageContributors: t => e(Object(pe.b)(n, i, t)),
						removeWikiPageContributor: t => e(Object(pe.d)({
							username: t,
							wikiPageName: i,
							subredditName: n
						})),
						toggleConfirmModal: () => e(Object(x.i)("WikiPageSettings--RemoveContributor"))
					}
				}),
				Le = e => s.a.createElement("div", {
					className: Object(Ne.a)(e.className, Object(Re.b)({
						isLoading: !0
					}))
				}),
				Ue = () => s.a.createElement(s.a.Fragment, null, Te()(3, e => s.a.createElement("div", {
					className: Oe.a.contributorRow,
					key: e
				}, s.a.createElement(Le, {
					className: Oe.a.loadingUserIcon
				}), s.a.createElement(Le, {
					className: Oe.a.loadingUserName
				}))));
			class Ae extends s.a.Component {
				constructor(e) {
					super(e), this.onChangeNewContributorInput = e => {
						this.setState({
							newContributor: e.target.value
						})
					}, this.onKeyDown = e => {
						e.keyCode === Be.a.Enter && this.canAdd() && this.onAddContributor()
					}, this.canAdd = () => !!this.state.newContributor, this.onAddContributor = () => {
						const e = Object(V.a)(this.state.newContributor);
						this.props.addWikiPageContributor(e), this.props.sendEvent(L.c), this.setState({
							newContributor: ""
						})
					}, this.onClickRemove = e => {
						this.setState({
							userToRemove: e
						}), this.props.toggleConfirmModal()
					}, this.onRemoveWikiContributor = () => {
						this.state.userToRemove && (this.props.removeWikiPageContributor(this.state.userToRemove), this.props.sendEvent(L.j))
					}, this.renderContributor = e => s.a.createElement("div", {
						className: Oe.a.contributorRow
					}, s.a.createElement(ye.a, {
						username: e.username,
						iconSize: 24,
						sendHoverCardEvent: fe.a,
						tooltipId: `wikiPageContributor--${e.username}`,
						userIcon: e.iconUrl
					}), s.a.createElement(D.r, {
						className: Oe.a.removeButton,
						onClick: () => this.onClickRemove(e.username)
					}, S.fbt._("Remove", null, {
						hk: "3tYl0U"
					}))), this.onLoadMore = async () => {
						this.props.afterToken && !this.state.isFetchMoreContributorsPending && (this.setState({
							isFetchMoreContributorsPending: !0
						}), await this.props.fetchMoreWikiPageContributors(this.props.afterToken), this.setState({
							isFetchMoreContributorsPending: !1
						}))
					}, this.state = {
						isFetchMoreContributorsPending: !1,
						newContributor: "",
						userToRemove: void 0
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement("div", {
						className: Object(Ne.a)(Oe.a.formGroup, Oe.a.contributorsForm)
					}, s.a.createElement("div", {
						className: Oe.a.sectionTitle
					}, S.fbt._("Add approved wiki contributor for this page", null, {
						hk: "35zH60"
					})), s.a.createElement(ae.c, {
						className: Oe.a.contributorInput,
						placeholder: S.fbt._("u/username", null, {
							hk: "38dqZm"
						}),
						value: t.newContributor,
						onChange: this.onChangeNewContributorInput,
						onKeyDown: this.onKeyDown,
						maxLength: 22
					}), s.a.createElement("div", {
						className: Oe.a.buttonRow
					}, s.a.createElement(D.l, {
						className: Oe.a.addButton,
						disabled: !this.canAdd(),
						onClick: this.onAddContributor
					}, S.fbt._("Add", null, {
						hk: "2wi3d4"
					}))), s.a.createElement(y.b, {
						loadMoreToken: e.afterToken ? e.afterToken : void 0,
						onLoadMore: this.onLoadMore,
						viewportTopPadding: j.f + j.i
					}, e.editorsInfo.map((e, t) => ({
						estHeight: 40,
						id: e.username,
						render: () => this.renderContributor(e)
					}))), t.isFetchMoreContributorsPending && s.a.createElement(Ue, null), t.userToRemove && e.isConfirmModalOpen && s.a.createElement(_.a, {
						actionText: S.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						headerText: S.fbt._("Remove wiki contributor?", null, {
							hk: "hADrb"
						}),
						modalText: S.fbt._("Do you wish to remove this user as a wiki contributor?", null, {
							hk: "4hsEY3"
						}),
						onConfirm: this.onRemoveWikiContributor,
						toggleModal: this.props.toggleConfirmModal,
						withOverlay: !0
					}))
				}
			}
			var Ie = De(Ae);
			const He = Object(M.c)({
				subredditSettings: (e, t) => {
					const n = Object(xe.H)(e, t.subredditName);
					return Object(xe.Z)(e, n)
				},
				wikiPageSettings: A.d
			});
			class Fe extends s.a.Component {
				constructor(e) {
					super(e), this.onChangeEditPermissions = e => {
						this.setState({
							editPermissions: e
						})
					}, this.onChangeVisibilitySettings = e => {
						this.setState({
							isVisible: e
						})
					}, this.onSave = async () => {
						this.sendOnSaveEvents(), this.setState({
							isSavePending: !0
						}), await this.props.saveWikiPageSettings(this.state.editPermissions, this.state.isVisible), this.setState({
							isSavePending: !1
						})
					}, this.sendOnSaveEvents = () => {
						const e = this.props.wikiPageSettings;
						e && (this.state.isVisible !== e.isVisible && this.props.sendEvent(Object(L.n)(!!this.state.isVisible)), this.state.editPermissions !== e.editPermissions && this.props.sendEvent(Object(L.o)(this.state.editPermissions)), this.props.sendEvent(L.p))
					}, this.onCancel = () => {
						this.props.wikiPageSettings && this.setState({
							editPermissions: this.props.wikiPageSettings.editPermissions,
							isVisible: this.props.wikiPageSettings.isVisible
						})
					}, this.state = {
						isSavePending: !1,
						isVisible: e.wikiPageSettings ? e.wikiPageSettings.isVisible : void 0,
						editPermissions: e.wikiPageSettings ? e.wikiPageSettings.editPermissions : void 0
					}
				}
				componentDidUpdate(e) {
					!e.wikiPageSettings && this.props.wikiPageSettings && this.setState({
						editPermissions: this.props.wikiPageSettings.editPermissions,
						isVisible: this.props.wikiPageSettings.isVisible
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (!e.wikiPageSettings) return null;
					const n = e.subredditSettings && "disabled" === e.subredditSettings.wikimode,
						i = t.editPermissions !== e.wikiPageSettings.editPermissions || t.isVisible !== e.wikiPageSettings.isVisible,
						r = t.editPermissions === Me.a.Contributors || t.editPermissions === Me.a.Inherit;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(b.c, null, i && s.a.createElement(s.a.Fragment, null, s.a.createElement(D.o, {
						className: Oe.a.cancelButton,
						onClick: this.onCancel
					}, S.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(D.l, {
						disabled: t.isSavePending,
						onClick: this.onSave
					}, S.fbt._("Save", null, {
						hk: "4yMsMq"
					})))), s.a.createElement(ke.a, {
						title: S.fbt._("Wiki page settings", null, {
							hk: "2l88sE"
						}),
						className: Oe.a.pageTitle,
						buttonText: S.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}),
						buttonLink: `/r/${e.subredditName}/about/wiki/${e.wikiPageName}`
					}), n && s.a.createElement(ge.a, {
						className: Oe.a.alertBanner,
						color: Ce.a.quarantine,
						icon: s.a.createElement(we.a, {
							className: Oe.a.alertIcon
						}),
						subtitle: S.fbt._("Only mods may interact with this wiki", null, {
							hk: "4zPGDV"
						}),
						title: S.fbt._("This wiki is currently disabled", null, {
							hk: "X2W9o"
						})
					}), s.a.createElement("div", {
						className: Oe.a.content
					}, s.a.createElement("div", {
						className: Oe.a.sectionTitle
					}, S.fbt._("Add to wiki home", null, {
						hk: "2F0uTz"
					})), s.a.createElement(Ee.a, {
						className: Oe.a.checkboxInput,
						value: t.isVisible,
						name: "listed",
						onChange: this.onChangeVisibilitySettings
					}, s.a.createElement("span", {
						className: Oe.a.inputOptionText
					}, S.fbt._("Show this page in your wiki index", null, {
						hk: "3l4r3U"
					}))), s.a.createElement("div", {
						className: Oe.a.formGroup
					}, s.a.createElement("div", {
						className: Oe.a.sectionTitle
					}, S.fbt._("Who can edit this page?", null, {
						hk: "24MlhK"
					})), s.a.createElement(ve.a, {
						value: t.editPermissions,
						name: "permlevel",
						onChange: this.onChangeEditPermissions
					}, s.a.createElement(Se.a, {
						className: Oe.a.radioOption,
						showButton: !0,
						value: Me.a.Inherit
					}, s.a.createElement("span", {
						className: Oe.a.inputOptionText
					}, S.fbt._("Use subreddit wiki permissions", null, {
						hk: "3VBjJ5"
					}))), s.a.createElement(Se.a, {
						className: Oe.a.radioOption,
						showButton: !0,
						value: Me.a.Mods
					}, s.a.createElement("span", {
						className: Oe.a.inputOptionText
					}, S.fbt._("Only mods may edit and view", null, {
						hk: "3dgrxn"
					}))), s.a.createElement(Se.a, {
						className: Oe.a.radioOption,
						showButton: !0,
						value: Me.a.Contributors
					}, s.a.createElement("span", {
						className: Oe.a.inputOptionText
					}, S.fbt._("Only approved wiki contributors for this page may edit", null, {
						hk: "16QJXW"
					}))))), r && s.a.createElement(Ie, {
						afterToken: e.wikiPageSettings.afterToken,
						sendEvent: this.props.sendEvent,
						subredditName: e.subredditName,
						wikiPageName: e.wikiPageName,
						editorsInfo: e.wikiPageSettings.editorsInfo
					})))
				}
			}
			var Xe = Object(w.b)(He, (e, t) => {
					let {
						subredditName: n,
						wikiPageName: i
					} = t;
					return {
						saveWikiPageSettings: (t, s) => e(Object(pe.e)({
							editPermissions: t,
							isVisible: s,
							subredditName: n,
							wikiPageName: i
						}))
					}
				})(Object(O.c)(Fe)),
				Qe = n("./src/reddit/components/Wiki/ModHubWikiManagement/index.m.less"),
				Ve = n.n(Qe);
			const qe = Object(u.u)(),
				Ze = () => {
					document.body.scrollTop = 0, document.documentElement.scrollTop = 0
				};
			class Ye extends s.a.Component {
				scrollToTopIfNeeded() {
					location.hash || Ze()
				}
				componentDidMount() {
					this.scrollToTopIfNeeded()
				}
				componentDidUpdate(e) {
					this.props.pageLayer !== e.pageLayer && this.scrollToTopIfNeeded()
				}
				render() {
					const {
						subreddit: e,
						pageLayer: t
					} = this.props;
					if (!t) return null;
					const {
						urlParams: n,
						queryParams: i
					} = t, {
						wikiSubRoute: u,
						wikiPageName: b,
						pageName: p
					} = n, g = i[l.S], k = i[l.T], C = l.U in i;
					switch (u) {
						case c.m.Create:
						case c.m.Edit:
							return s.a.createElement(o.a, {
								contentClassName: Ve.a.modHubPageEditorContent,
								isCreation: u === c.m.Create,
								subredditName: e.name,
								topBarClassName: Ve.a.modHubTopBar,
								wikiPageName: b
							});
						case c.m.Revisions:
							return s.a.createElement(h.a, {
								isModHub: !0,
								isRecentRevisionsMode: !b,
								key: b,
								subredditName: e.name,
								wikiPageName: b
							});
						case c.m.Settings:
							if (b) return s.a.createElement(Xe, {
								subredditName: e.name,
								wikiPageName: b
							});
							break;
						default:
							return p === r.mc.WikiBanned ? s.a.createElement(se, {
								subredditId: e.id,
								subredditName: e.name
							}) : p === r.mc.WikiContributors ? s.a.createElement(be, {
								subredditName: e.name
							}) : b && g && k ? s.a.createElement(a.a, {
								comparisonRevisionId: Object(m.a)(k),
								isModHub: !0,
								revisionId: Object(m.a)(g),
								subredditName: e.name,
								wikiPageName: b
							}) : b && (g || C) ? s.a.createElement(d.a, {
								isModHub: !0,
								revisionId: g ? Object(m.a)(g) : void 0,
								subredditName: e.name,
								wikiPageName: b
							}) : b ? s.a.createElement(E, {
								wikiPageName: b,
								subredditName: e.name
							}) : null
					}
				}
			}
			t.default = qe(Ye)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Wiki-ModHubWikiManagement.9f0f7fb04c4618895a72.js.map