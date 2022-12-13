// https://www.redditstatic.com/desktop2x/OverlayCreateChannel.af4f49c7c0f0491ea265.js
// Retrieved at 12/13/2022, 10:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayCreateChannel"], {
		"./src/chat/components/OverlayCreateChannel/index.m.less": function(e, t, n) {
			e.exports = {
				Content: "_1hC_Uia5BNA3T_u7HMpSZG",
				content: "_1hC_Uia5BNA3T_u7HMpSZG",
				Checkbox: "_3GsQM0WckX2LUq1uXLAPFK",
				checkbox: "_3GsQM0WckX2LUq1uXLAPFK",
				Scroller: "_3jTOQRN48SYTsqhBKHqC4Z",
				scroller: "_3jTOQRN48SYTsqhBKHqC4Z",
				ListItem: "_1xahoE-aw4Dlt5luSt2p4M",
				listItem: "_1xahoE-aw4Dlt5luSt2p4M",
				UserNotFound: "P_88R_H4Ww-L1MTF4iRkY",
				userNotFound: "P_88R_H4Ww-L1MTF4iRkY",
				ListItemHeader: "_3WOxEuf3YCyzuUH93Vlyc5",
				listItemHeader: "_3WOxEuf3YCyzuUH93Vlyc5",
				ChatListHeader: "f1Vn8P6AnRNELbDzUjx9e",
				chatListHeader: "f1Vn8P6AnRNELbDzUjx9e",
				Name: "JBR5EOMqd72EqgfXylDwk",
				name: "JBR5EOMqd72EqgfXylDwk",
				Error: "_38k-vHCy1mrtIvoNMijbPz",
				error: "_38k-vHCy1mrtIvoNMijbPz",
				ChannelNameInput: "_1q7NucdJkk8imHDBisfJyk",
				channelNameInput: "_1q7NucdJkk8imHDBisfJyk",
				OverlayContent: "_1ppnyRj_9LpVLO_D4hSmuD",
				overlayContent: "_1ppnyRj_9LpVLO_D4hSmuD",
				ChannelNameWrapper: "_3kiusu26cM8caGCqS2DjBs",
				channelNameWrapper: "_3kiusu26cM8caGCqS2DjBs",
				shown: "_2Mva-9o8IuN_QrvvZYRHyH",
				CopyInviteLink: "zBON5dtOZB94MwnSEa0f1",
				copyInviteLink: "zBON5dtOZB94MwnSEa0f1",
				LinkButton: "_2bL65Uh_dTxKAC0V5UemZT",
				linkButton: "_2bL65Uh_dTxKAC0V5UemZT",
				CopyInviteLinkContent: "_1WJFvb2J-BkKyg9BR3hNuM",
				copyInviteLinkContent: "_1WJFvb2J-BkKyg9BR3hNuM",
				CopyInviteLinkContentHeader: "_36Z3BkLCEma7aH8PCn9HqE",
				copyInviteLinkContentHeader: "_36Z3BkLCEma7aH8PCn9HqE",
				CopyInviteLinkContentBody: "zW47C_63NuY4bkUzwwmLj",
				copyInviteLinkContentBody: "zW47C_63NuY4bkUzwwmLj",
				SettingsButton: "_2HDk8OC1nlfD5GBh0lKbwh",
				settingsButton: "_2HDk8OC1nlfD5GBh0lKbwh",
				CopyInviteLinkPlaceholder: "_2LJZiLEkUqmR3pBIvFrosC",
				copyInviteLinkPlaceholder: "_2LJZiLEkUqmR3pBIvFrosC",
				SearchWrapper: "_2jWwMI1Hqr2SJghZ1L0PzL",
				searchWrapper: "_2jWwMI1Hqr2SJghZ1L0PzL",
				ChannelNameLengthCounter: "_1C_EFTPfbRcQ_6Zfmn63Bc",
				channelNameLengthCounter: "_1C_EFTPfbRcQ_6Zfmn63Bc"
			}
		},
		"./src/chat/components/OverlayCreateChannel/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "CopyInviteLink", (function() {
				return J
			})), n.d(t, "OverlayCreateChannel", (function() {
				return Y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/noop.js"),
				r = n.n(a),
				c = n("./node_modules/lodash/uniqBy.js"),
				i = n.n(c),
				o = n("./node_modules/react/index.js"),
				l = n.n(o),
				h = n("./node_modules/react-redux/es/index.js"),
				m = n("./src/chat/actions/channel.ts"),
				d = n("./src/chat/actions/channel/dropdown.ts"),
				u = n("./src/chat/actions/inviteLink/index.ts"),
				p = n("./src/chat/actions/sendbird/index.ts"),
				C = n("./src/chat/actions/tracking.ts"),
				b = n("./src/chat/actions/user.ts"),
				x = n("./src/chat/components/OverlayNav/index.tsx"),
				_ = n("./src/chat/components/Scroller/index.tsx"),
				g = n("./src/chat/components/SearchBar/index.tsx"),
				f = n("./src/chat/components/SelectableUser/index.tsx"),
				E = n("./src/chat/icons/Userpic/index.tsx"),
				S = n("./src/chat/components/UnselectableUser/index.m.less"),
				k = n.n(S),
				U = n("./src/lib/classNames/index.ts");
			var N = e => {
					let {
						contact: {
							id: t,
							name: n
						},
						context: s,
						isHidden: a
					} = e;
					return l.a.createElement("span", {
						className: Object(U.a)(k.a.Wrapper, {
							[k.a.hidden]: a
						})
					}, l.a.createElement("span", {
						className: k.a.Content
					}, l.a.createElement(E.a, {
						className: k.a.UserPic,
						userId: t,
						width: "22px",
						height: "22px"
					}), l.a.createElement("div", {
						className: k.a.UserMetaWrapper
					}, l.a.createElement("span", {
						className: k.a.Name
					}, n))), l.a.createElement("span", {
						className: k.a.Context
					}, s))
				},
				y = n("./src/chat/constants/channels.ts"),
				v = n("./src/chat/controls/Button/index.tsx"),
				I = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				L = n("./src/chat/controls/Overlay/index.tsx"),
				B = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				O = n("./src/chat/controls/Settings/SectionTitle/index.tsx"),
				T = n("./src/chat/helpers/chatSelector.ts"),
				j = n("./src/chat/helpers/dom.ts"),
				w = n("./src/chat/icons/svgs/Link/index.tsx"),
				R = n("./src/chat/selectors/channels.ts"),
				H = n("./src/chat/selectors/contacts.ts"),
				W = n("./src/chat/selectors/experiments.ts"),
				A = n("./src/chat/selectors/inviteLink.ts"),
				F = n("./src/chat/selectors/platform.ts"),
				M = n("./src/chat/selectors/user.ts"),
				P = n("./src/chat/components/OverlayCreateChannel/index.m.less"),
				D = n.n(P);
			const G = "contactForm",
				q = e => {
					let {
						children: t
					} = e;
					return l.a.createElement("div", {
						className: D.a.ListItem
					}, t)
				},
				z = e => e.toLocaleLowerCase(),
				Z = Object(T.a)({
					channelAction: e => Object(F.d)(e),
					channel: e => Object(R.n)(e),
					currentUserName: M.b,
					existingGroupUsers: e => {
						const t = Object(R.E)(e, "members");
						return t && t.map(e => e.id)
					},
					isCreatingChannel: R.O,
					loadedContacts: H.i,
					knownContacts: H.h,
					memberCount: e => Object(R.E)(e, "memberCount"),
					selectedUsers: H.j,
					selectedUsersCount: H.k,
					isBlockedUserMessageEnabled: W.a,
					directChatOpponentId: R.u
				}),
				K = Object(h.b)(Z, e => ({
					onCreateNewChannel: (t, n, s) => e(Object(m.B)(t, n, s)),
					onInviteUsersToExistingChannel: t => e(Object(m.G)(t)),
					onIdentifyContact: t => e(Object(p.j)({
						username: t
					})),
					onCancelAndGoBack: () => {
						e(Object(m.P)()), e(Object(C.k)())
					},
					onSelectUser: t => e(Object(b.l)(t)),
					onUnselectUser: t => e(Object(b.r)(t)),
					removeAllSelectedUsers: () => e(Object(b.q)()),
					requestSuggestedContacts: () => e(Object(p.m)())
				})),
				J = e => {
					let {
						channelId: t,
						isHidden: n
					} = e;
					const a = Object(h.d)(),
						r = Object(h.e)(M.a),
						c = t || r,
						i = Object(h.e)(R.a),
						o = Object(h.e)(e => Object(A.a)(e, c)),
						m = Object(h.e)(e => Object(A.b)(e, c));
					return t ? l.a.createElement("span", {
						className: D.a.CopyInviteLink
					}, l.a.createElement(v.b, {
						className: D.a.LinkButton
					}, l.a.createElement(w.a, null)), l.a.createElement("div", {
						className: D.a.CopyInviteLinkContent
					}, l.a.createElement("div", {
						className: D.a.CopyInviteLinkContentHeader
					}, t ? s.fbt._("Invite with link", null, {
						hk: "37SZLa"
					}) : s.fbt._("Start a direct chat", null, {
						hk: "3TR4iZ"
					})), o && m && l.a.createElement("div", {
						className: D.a.CopyInviteLinkContentBody
					}, `${s.fbt._("Limited to",null,{hk:"3uHU48"})} ${m} ${s.fbt._("invites",null,{hk:"iP9qt"})}. `, !t || i ? l.a.createElement("button", {
						role: "button",
						onClick: Object(j.b)(() => {
							a(Object(d.b)(c, !t))
						}),
						className: D.a.SettingsButton
					}, s.fbt._("Edit link", null, {
						hk: "2ryT90"
					})) : null)), l.a.createElement(v.a, {
						onClick: Object(j.b)(() => {
							a(Object(u.e)(c, !t)), a(Object(C.p)(u.b.CHAT_SETTINGS))
						}),
						secondary: !0,
						isSmall: !0,
						disabled: n
					}, s.fbt._("Copy", null, {
						hk: "wO1gU"
					}))) : null
				};
			class Y extends l.a.Component {
				constructor(e) {
					super(e), this.isUserSelected = e => this.props.selectedUsers.includes(e), this.isCreateChannelURLAction = () => this.props.channelAction === y.a.CREATE, this.isInviteMembersURLAction = () => this.props.channelAction === y.a.INVITE_MEMBERS, this.isShareToNewChannelAction = () => this.props.channelAction === y.a.SHARE_NEW_CHANNEL, this.isStartGroupChannelAction = () => this.props.channelAction === y.a.START_GROUP, this.isExistingGroupUser = e => {
						return !(!(this.isInviteMembersURLAction() && this.props.existingGroupUsers && this.props.existingGroupUsers.includes(e)) || this.isUserSelected(e))
					}, this.hasTooManyMembers = () => {
						const {
							memberCount: e,
							selectedUsersCount: t
						} = this.props;
						return t + (this.isInviteMembersURLAction() ? e : 0) > y.h
					}, this.isSubmitDisabled = e => {
						const {
							isCreatingChannel: t,
							selectedUsersCount: n
						} = this.props, s = this.isCreateChannelURLAction(), a = this.isShareToNewChannelAction(), r = e < 0, c = n > 1, i = this.hasTooManyMembers();
						return !n || t || (s || a) && c && (r || i) || !(s || a) && i
					}, this.getInviteMembersText = () => s.fbt._("Invite people", null, {
						hk: "kedgc"
					}), this.primaryButtonText = () => {
						const {
							selectedUsersCount: e
						} = this.props;
						return this.isInviteMembersURLAction() ? s.fbt._("Invite to Group", null, {
							hk: "1obdqW"
						}) : e > 1 ? s.fbt._("Start Group Chat", null, {
							hk: "4rRvvK"
						}) : s.fbt._("Start Chat", null, {
							hk: "sHVDx"
						})
					}, this.getBlockedContactText = e => e.isBlocked ? s.fbt._("blocked", null, {
						hk: "34l2Jz"
					}) : !1 === e.acceptChats ? s.fbt._("unable to message this account", null, {
						hk: "SDEZ3"
					}) : s.fbt._("already in group", null, {
						hk: "2obrxR"
					}), this.getOverlayTitle = () => {
						const {
							selectedUsersCount: e
						} = this.props;
						return this.isCreateChannelURLAction() ? e > 1 ? s.fbt._("New Group", null, {
							hk: "2UrrCc"
						}) : s.fbt._("New Chat", null, {
							hk: "2TYMUW"
						}) : this.isStartGroupChannelAction() ? s.fbt._("Start a group chat", null, {
							hk: "14g6yf"
						}) : this.getInviteMembersText()
					}, this.getOverlayMessage = () => {
						const {
							selectedUsersCount: e
						} = this.props;
						return e === y.h ? s.fbt._("Maximum group size reached", null, {
							hk: "7hpRV"
						}) : ""
					}, this.getSelectedContacts = this.getSelectedContacts.bind(this), this.onContactsSelect = this.onContactsSelect.bind(this), this.onFilterContacts = this.onFilterContacts.bind(this), this.onFilterReset = this.onFilterReset.bind(this), this.onSubmit = this.onSubmit.bind(this), this.onCancel = this.onCancel.bind(this), this.handleChannelNameInput = this.handleChannelNameInput.bind(this), this.searchBarElement = l.a.createRef(), e.directChatOpponentId && e.channelAction === y.a.START_GROUP && e.onSelectUser(e.directChatOpponentId), this.state = {
						filter: "",
						resetFilter: !1,
						groupName: ""
					}
				}
				UNSAFE_componentWillMount() {
					this.props.requestSuggestedContacts()
				}
				componentWillUnmount() {
					this.props.removeAllSelectedUsers()
				}
				onContactsSelect(e) {
					const t = e.target.id,
						{
							onSelectUser: n,
							onUnselectUser: s,
							selectedUsers: a,
							selectedUsersCount: r
						} = this.props;
					a.includes(t) ? s(t) : (r < y.h || r < 1) && (this.setState(e => ({
						...e,
						resetFilter: !0
					})), n(t)), this.searchBarElement.current && this.searchBarElement.current.focus()
				}
				onFilterContacts(e) {
					this.setState({
						filter: e.trim()
					})
				}
				onFilterReset() {
					this.setState({
						filter: "",
						resetFilter: !1
					})
				}
				handleChannelNameInput(e) {
					this.setState({
						groupName: e
					})
				}
				onSubmit() {
					const {
						onCreateNewChannel: e,
						onInviteUsersToExistingChannel: t,
						messageValue: n
					} = this.props, s = this.getSelectedContacts().map(e => e.id);
					if (s && s.length) {
						const a = this.getGroupName();
						if (this.isCreateChannelURLAction() || this.isStartGroupChannelAction()) return e(s, a);
						if (this.isShareToNewChannelAction()) return e(s, a, n);
						t(s)
					}
				}
				onCancel() {
					this.props.onCancelAndGoBack()
				}
				getSelectedContacts() {
					const {
						loadedContacts: e,
						selectedUsers: t
					} = this.props, n = [];
					return t.map(t => {
						for (const s in e) z(e[s].id) === t && n.push(e[s])
					}), n
				}
				getFilteredContacts() {
					const {
						props: {
							loadedContacts: e
						},
						state: {
							filter: t
						}
					} = this;
					return t ? e.filter(e => z(e.name).includes(z(t)) && !e.isBlocked).sort(e => e.name === t ? -1 : 0) : e
				}
				getIsValidUser(e) {
					const t = this.props.knownContacts[z(e)];
					return !t || !t.loaded || t.valid
				}
				availableCharacters(e) {
					return y.g - e.length
				}
				getGroupName() {
					const e = this.state.groupName.trim();
					if (e) return e;
					let t = this.getSelectedContacts();
					if (!t.length) return "";
					let {
						currentUserName: n
					} = this.props;
					for (; t.length && n.length + t[0].name.length <= y.g;) n = n + ", " + t[0].name, t = t.splice(1, t.length - 1);
					return n
				}
				render() {
					const {
						props: {
							className: e,
							onIdentifyContact: t,
							selectedUsersCount: n,
							channel: a,
							isBlockedUserMessageEnabled: c
						},
						state: {
							filter: o,
							resetFilter: h,
							groupName: m
						},
						isUserSelected: d,
						isExistingGroupUser: u,
						onFilterReset: p,
						onFilterContacts: C,
						onContactsSelect: b,
						onSubmit: E,
						onCancel: S
					} = this, k = this.getSelectedContacts(), U = this.getFilteredContacts(), v = !this.getIsValidUser(o), T = this.handleChannelNameInput, w = this.availableCharacters(m), R = this.isSubmitDisabled(w), H = this.primaryButtonText(), W = this.isCreateChannelURLAction(), A = this.isShareToNewChannelAction(), F = this.isStartGroupChannelAction(), M = n >= y.h, P = F || (W || A) && n > 1;
					return l.a.createElement(L.a, {
						className: e,
						innerContent: !0,
						isSettings: !0,
						form: !0
					}, l.a.createElement(x.a, {
						showMenu: F,
						channelId: null == a ? void 0 : a.channelId,
						title: this.getOverlayTitle(),
						hasWarning: M,
						subTitle: this.getOverlayMessage()
					}), l.a.createElement("div", {
						className: D.a.OverlayContent
					}, l.a.createElement("div", {
						className: D.a.Content
					}, !A && !F && !P && l.a.createElement(J, {
						channelId: null == a ? void 0 : a.channelId,
						isHidden: !!n
					}), P && l.a.createElement(l.a.Fragment, null, l.a.createElement(O.a, {
						text: s.fbt._("Group name", null, {
							hk: "1pyJMB"
						})
					}), l.a.createElement(I.a, {
						className: D.a.ChannelNameInput,
						handleChannelNameInput: T,
						maxLength: y.g,
						placeholder: s.fbt._("Type here", null, {
							hk: "43JnnQ"
						})
					}, l.a.createElement("span", {
						className: D.a.ChannelNameLengthCounter
					}, `${w}/${y.g}`))), l.a.createElement(O.a, {
						text: s.fbt._("Search", null, {
							hk: "42GUh"
						})
					}), l.a.createElement("div", {
						className: D.a.SearchWrapper
					}, l.a.createElement(g.a, {
						innerRef: this.searchBarElement,
						filter: o,
						resetFilter: h,
						selectedContacts: k,
						onFilterReset: p,
						onFilterContacts: C,
						onIdentifyContact: t,
						onUnselect: this.props.onUnselectUser
					}), v ? l.a.createElement("span", {
						className: D.a.Name
					}, l.a.createElement("span", {
						className: D.a.Error
					}, s.fbt._("User doesn't exist", null, {
						hk: "2nKv7P"
					}))) : null, l.a.createElement(_.a, {
						className: D.a.Scroller,
						loadMoreRows: r.a
					}, i()(U, e => e.name).reduce((e, t) => [...e, u(t.id) || t.isBlocked && c || !1 === t.acceptChats ? o.length ? l.a.createElement(q, {
						key: t.name
					}, l.a.createElement(N, {
						isHidden: !o.length,
						contact: t,
						context: this.getBlockedContactText(t)
					})) : null : l.a.createElement(q, {
						key: t.name
					}, l.a.createElement(f.a, {
						formName: G,
						contact: t,
						onChange: b,
						isChecked: d(t.id)
					}))], [])))), k.length && !F || F && k.length > 1 ? l.a.createElement(B.a, {
						primaryButtonText: H,
						primaryButtonDisabled: R,
						secondaryButtonAction: S,
						primaryButtonAction: Object(j.a)(E)
					}) : null))
				}
			}
			t.default = K(Y)
		},
		"./src/chat/components/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				SearchBarWrapper: "KhZg0bTs9OULHNVuM28-j",
				searchBarWrapper: "KhZg0bTs9OULHNVuM28-j",
				LoadIcon: "_1SSH0p5LIjDDzWTWgDl3Hg",
				loadIcon: "_1SSH0p5LIjDDzWTWgDl3Hg",
				SearchIcon: "_1fF5rR85aN7B4xWTLIhPjw",
				searchIcon: "_1fF5rR85aN7B4xWTLIhPjw",
				zoomInOut: "j7ceNIADkgzX3UWA8eLnj",
				SearchBarField: "_3vilBtEofGPjLW8XnN__LH",
				searchBarField: "_3vilBtEofGPjLW8XnN__LH",
				SearchBarInput: "_2clRIy8wf_7H8xNNrUPaiU",
				searchBarInput: "_2clRIy8wf_7H8xNNrUPaiU",
				Bubble: "_3Os5eNEJdv4w6tsQdtTT5d",
				bubble: "_3Os5eNEJdv4w6tsQdtTT5d"
			}
		},
		"./src/chat/components/SearchBar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/last.js"),
				r = n.n(a),
				c = n("./node_modules/react/index.js"),
				i = n.n(c),
				o = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				h = n("./src/chat/components/Scroller/index.tsx"),
				m = n("./src/chat/constants/keys.ts"),
				d = n("./src/chat/helpers/dom.ts"),
				u = n("./src/chat/controls/Svg/index.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var C = e => i.a.createElement(u.a, p({}, e, {
					viewBox: "0 0 20 20"
				}), i.a.createElement("rect", {
					x: "1",
					y: "9.375",
					width: "4",
					height: "1.25"
				}), i.a.createElement("rect", {
					x: "15",
					y: "9.375",
					width: "4",
					height: "1.25"
				}), i.a.createElement("rect", {
					x: "9.375",
					y: "1",
					width: "1.25",
					height: "4"
				}), i.a.createElement("rect", {
					x: "9.375",
					y: "15",
					width: "1.25",
					height: "4"
				}), i.a.createElement("rect", {
					x: "1.938",
					y: "12.875",
					width: "4",
					height: "1.25",
					transform: "translate(-6.221 3.776) rotate(-29.989)"
				}), i.a.createElement("rect", {
					x: "14.062",
					y: "5.875",
					width: "4",
					height: "1.25",
					transform: "translate(-1.099 8.899) rotate(-29.989)"
				}), i.a.createElement("rect", {
					x: "5.875",
					y: "1.938",
					width: "1.25",
					height: "4",
					transform: "translate(-1.098 3.777) rotate(-29.998)"
				}), i.a.createElement("rect", {
					x: "12.875",
					y: "14.062",
					width: "1.25",
					height: "4",
					transform: "translate(-6.222 8.901) rotate(-29.998)"
				}), i.a.createElement("rect", {
					x: "15.437",
					y: "11.5",
					width: "1.25",
					height: "4",
					transform: "translate(-3.661 20.66) rotate(-59.998)"
				}), i.a.createElement("rect", {
					x: "3.313",
					y: "4.5",
					width: "1.25",
					height: "4",
					transform: "translate(-3.66 6.66) rotate(-59.998)"
				}), i.a.createElement("rect", {
					x: "4.5",
					y: "15.437",
					width: "4",
					height: "1.25",
					transform: "translate(-10.66 13.657) rotate(-59.989)"
				}), i.a.createElement("rect", {
					x: "11.5",
					y: "3.313",
					width: "4",
					height: "1.25",
					transform: "translate(3.338 13.658) rotate(-59.989)"
				})),
				b = n("./src/chat/icons/svgs/Search/index.tsx"),
				x = n("./src/chat/components/SearchBar/index.m.less"),
				_ = n.n(x),
				g = n("./src/lib/combineRefs/index.tsx");
			const f = l.a.span("Bubble", _.a),
				E = l.a.span("SearchBarField", _.a),
				S = l.a.input("SearchBarInput", _.a);
			class k extends i.a.Component {
				constructor(e) {
					super(e), this.bubbleRefs = {}, this.timeoutToken = null, this.onBubbleKey = e => t => {
						switch (t.key) {
							case m.f:
							case m.e: {
								const t = this.searchBarInputRef.current;
								return t && t.focus(), this.props.onUnselect(e.id)
							}
							case m.b: {
								const e = t.target;
								if (e.previousElementSibling) {
									e.previousElementSibling.focus()
								}
								break
							}
							case m.c: {
								const e = t.target;
								if (e.nextElementSibling) {
									e.nextElementSibling.focus()
								}
							}
						}
					}, this.onBubbleKey = this.onBubbleKey.bind(this), this.onFilterChange = this.onFilterChange.bind(this), this.stopEnter = this.stopEnter.bind(this), this.searchKeyHandler = this.searchKeyHandler.bind(this), this.searchBarInputRef = i.a.createRef()
				}
				stopEnter(e) {
					e.key === m.g && e.preventDefault()
				}
				onFilterChange(e) {
					this.props.onFilterContacts(e.currentTarget.value)
				}
				searchKeyHandler(e) {
					const {
						props: {
							onFilterContacts: t,
							onIdentifyContact: n,
							onIdentifyContactTimeout: s
						}
					} = this, a = e.currentTarget, c = () => a.value;
					switch (this.timeoutToken && clearTimeout(this.timeoutToken), this.timeoutToken = setTimeout(() => {
						c() && n(c())
					}, s), e.key) {
						case m.g:
							return n(c());
						case m.b:
						case m.f:
						case m.e:
							if (0 === c().length) {
								const e = r()(this.props.selectedContacts);
								if (e && e.name) {
									const t = this.bubbleRefs[e.name];
									t && t.focus()
								}
							}
					}
					return t(c())
				}
				render() {
					const {
						props: {
							isLoading: e,
							filter: t,
							resetFilter: n,
							selectedContacts: a,
							onFilterReset: r,
							className: c,
							placeholder: l
						}
					} = this, m = n ? "" : t;
					return i.a.createElement(h.a, {
						autoScrollBottom: !0,
						className: Object(o.a)(_.a.SearchBarWrapper, c)
					}, a.length ? null : e ? i.a.createElement(C, {
						className: _.a.LoadIcon
					}) : i.a.createElement(b.a, {
						className: _.a.SearchIcon
					}), i.a.createElement(E, null, a && a.length > 0 && a.map((e, t) => i.a.createElement(f, {
						key: `selected-contact-${t}`,
						tabIndex: 0,
						onKeyDown: Object(d.a)(this.onBubbleKey(e)),
						innerRef: t => {
							t && (this.bubbleRefs[e.name] = t)
						}
					}, e.name)), i.a.createElement(S, {
						placeholder: a.length ? "" : l || s.fbt._("Type usernames", null, {
							hk: "15RdA4"
						}),
						key: "search-bar",
						type: "text",
						autoFocus: !0,
						value: m,
						onFocus: r,
						onChange: this.onFilterChange,
						onKeyDown: this.stopEnter,
						onKeyUp: this.searchKeyHandler,
						innerRef: Object(g.a)(this.searchBarInputRef, this.props.innerRef)
					})))
				}
			}
			k.defaultProps = {
				onIdentifyContactTimeout: 500
			}
		},
		"./src/chat/components/SelectableUser/index.m.less": function(e, t, n) {
			e.exports = {
				Checkbox: "_245EMGvr6FxhYfqTf2m6Zk",
				checkbox: "_245EMGvr6FxhYfqTf2m6Zk",
				UserPic: "zW7z1umVHXoa1LGs0PhqY",
				userPic: "zW7z1umVHXoa1LGs0PhqY",
				Name: "_1HoUzT_zRlnm-zLSJPRh28",
				name: "_1HoUzT_zRlnm-zLSJPRh28",
				UserInfoWrapper: "_9qboECu4INdyuSmkF-DNd",
				userInfoWrapper: "_9qboECu4INdyuSmkF-DNd",
				UserMetaWrapper: "_3DT169WjMBbQwP3HsZzHXU",
				userMetaWrapper: "_3DT169WjMBbQwP3HsZzHXU"
			}
		},
		"./src/chat/components/SelectableUser/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/chat/controls/Checkbox/index.tsx"),
				c = n("./src/chat/icons/Userpic/index.tsx"),
				i = n("./src/chat/components/SelectableUser/index.m.less"),
				o = n.n(i);
			t.a = e => {
				let {
					formName: t,
					contact: {
						id: n,
						name: s
					},
					onChange: i,
					isChecked: l,
					isTextCheckbox: h
				} = e;
				return a.a.createElement(r.a, {
					className: o.a.Checkbox,
					type: "checkbox",
					name: t,
					value: s,
					onChange: i,
					checked: l,
					id: n,
					isTextCheckbox: h
				}, a.a.createElement("div", {
					className: o.a.UserInfoWrapper
				}, a.a.createElement(c.a, {
					className: o.a.UserPic,
					userId: n,
					width: "22px",
					height: "22px"
				}), a.a.createElement("div", {
					className: o.a.UserMetaWrapper
				}, a.a.createElement("div", {
					className: o.a.Name
				}, s))))
			}
		},
		"./src/chat/components/UnselectableUser/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "oifWWeXtU7UUw2o2ujOPY",
				wrapper: "oifWWeXtU7UUw2o2ujOPY",
				hidden: "_2N407kW4pa0KvZw_OY4X-k",
				Content: "Dfb74heOWSZF6_doPiIDe",
				content: "Dfb74heOWSZF6_doPiIDe",
				UserPic: "_367xw6e_C8q7AIpViUzQ4",
				userPic: "_367xw6e_C8q7AIpViUzQ4",
				Name: "_2UYcL31wx648GQ4cbrbg8b",
				name: "_2UYcL31wx648GQ4cbrbg8b",
				Context: "_1ombhjP6A9filW0mZ6Wxv1",
				context: "_1ombhjP6A9filW0mZ6Wxv1"
			}
		},
		"./src/chat/controls/Settings/SectionTitle/index.m.less": function(e, t, n) {
			e.exports = {
				SectionTitle: "syLXEcIqb2SJy9_YQ8rne",
				sectionTitle: "syLXEcIqb2SJy9_YQ8rne"
			}
		},
		"./src/chat/controls/Settings/SectionTitle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/chat/controls/Settings/SectionTitle/index.m.less"),
				c = n.n(r);
			t.a = e => {
				let {
					text: t
				} = e;
				return a.a.createElement("div", {
					className: c.a.SectionTitle
				}, t)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayCreateChannel.af4f49c7c0f0491ea265.js.map